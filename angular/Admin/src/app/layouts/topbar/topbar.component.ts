import { Component, OnInit, AfterViewInit, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from '../../core/services/language.service';
import { TranslateService } from '@ngx-translate/core';

import { ApiServerService, MessagesService } from './../../utils/index';

// Interfaces
import { ErrorResponse } from './../../interfaces/index';

import Swal from 'sweetalert2';
import { User } from 'src/app/core/models/auth.models';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

/**
 * Topbar component
 */
export class TopbarComponent implements OnInit, AfterViewInit {

  element;
  configData;
  cookieValue;
  flagvalue: any;
  countryName: any;
  valueset;
	currentUser: User;

  constructor(@Inject(DOCUMENT) private document: any,
    private router: Router,
		public api: ApiServerService,
    public msg: MessagesService,
    public languageService: LanguageService,
    public translate: TranslateService,
    public _cookiesService: CookieService) {
  }
	ngAfterViewInit(): void {
	}
	
  listLang = [
		{ text: 'Spanish', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
    { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
    { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
    { text: 'Italian', flag: 'assets/images/flags/italy.jpg', lang: 'it' },
    { text: 'Russian', flag: 'assets/images/flags/russia.jpg', lang: 'ru' },
  ];
	
  openMobileMenu: boolean;
	
  @Output() settingsButtonClicked = new EventEmitter();
  @Output() mobileMenuButtonClicked = new EventEmitter();
	
  ngOnInit() {
		const ts    = this;
		ts.currentUser	= ts.api.getCurrentUser();
    this.openMobileMenu = false;
    this.element = document.documentElement;

    this.configData = {
      suppressScrollX: true,
      wheelSpeed: 0.3
    };

    this.cookieValue = this._cookiesService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    this.countryName = val.map(element => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) { this.valueset = 'assets/images/flags/spain.jpg'; }
    } else {
      this.flagvalue = val.map(element => element.flag);
    }
  }

  /**
   * Language set
   * @param text 
   * @param lang 
   * @param flag 
   */
  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }

  /**
   * Toggles the right sidebar
   */
  toggleRightSidebar() {
    this.settingsButtonClicked.emit();
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  /**
   * Logout the user
   */
  logout() {
    const ts    = this;
    const lang  = ts.translate;
    const
      closeApp    = lang.instant('menu.user.closeApp');
      Swal.fire({
        title : lang.instant('titleMessages.logout'),
        text  : lang.instant('bodyMessages.logout'),
        icon  : 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: lang.instant('buttons.yes'),
        cancelButtonText: lang.instant('buttons.not')
      }).then((result) => {
        if (result.value) {
          ts.api.get('/auth/logout', {})
          .subscribe((resp) => {
            localStorage.removeItem(ts.api.getApiJwt());
						ts.api.onClearCurrentUser();
            window.location.reload();
          }, (err: ErrorResponse) => {
            ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
          });
          }
      });
  }

  /**
   * Fullscreen method
   */
  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement && !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    }
  }
}
