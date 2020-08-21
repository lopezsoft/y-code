import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuItem, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { Router } from '@angular/router';

import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import Swal from 'sweetalert2';

import {TranslateService} from '@ngx-translate/core';
import { ApiServerService, MessagesService } from 'src/app/utils/index';

// Interfaces
import { JsonResponse, ErrorResponse, AccessToken } from 'src/app/interfaces/index';

// Base component
import { BaseComponent } from 'src/app/core/components/base/base.component';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent extends BaseComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean;
  user: AccessToken;

  currentTheme = 'default';

  userMenu = [];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService,
              public api: ApiServerService,
              private translate: TranslateService,
              public msg: MessagesService,
              public router: Router) {
    super(api, router);
  }

  ngOnInit(): void {
    const ts  = this;
    ts.currentTheme = ts.themeService.currentTheme;
    const
      closeApp    = ts.translate.instant('menu.user.closeApp');
    const
      profileApp  = ts.translate.instant('menu.user.profile');
    ts.userMenu = [ { title: profileApp }, { title: closeApp} ];

    const { xl } = ts.breakpointService.getBreakpointsMap();
    ts.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(ts.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => ts.userPictureOnly = isLessThanXl);

    ts.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(ts.destroy$),
      )
      .subscribe(themeName => ts.currentTheme = themeName);
    ts.user = ts.api.getToken();
    this.menuService.onItemClick()
      .subscribe((event) => {
        this.onMenuItemClick(event.item.title, event.item);
      });
  }

  onMenuItemClick(title: string, item: NbMenuItem): void {
    const ts    = this;
    const lang  = ts.translate;
    const
      closeApp    = lang.instant('menu.user.closeApp');
    if(title === closeApp){
      Swal.fire({
        title : lang.instant('titleMessages.logout'),
        text  : lang.instant('bodyMessages.logout'),
        icon  : 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        // customClass : {
        //   title : 'title-center-black',
        // },
        confirmButtonText: lang.instant('buttons.yes'),
        cancelButtonText: lang.instant('buttons.not')
      }).then((result) => {
        if (result.value) {
          ts.api.get('/auth/logout', {})
          .subscribe((resp: JsonResponse) => {
            localStorage.removeItem(ts.api.getApiJwt());
            window.location.reload();
          }, (err: ErrorResponse) => {
            ts.msg.toastMessage(lang.instant('general.error'), err.error.message, 4);
          });
          }
      });
    }
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string): void {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');

    return false;
  }

  navigateHome(): boolean {
    this.menuService.navigateHome();
    return false;
  }
}
