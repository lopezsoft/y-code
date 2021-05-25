import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AccessToken } from './../interfaces/access-token.interface';
import { environment } from './../../environments/environment';
import { JsonResponse } from './../interfaces';
import { User } from '../core/models/auth.models';


@Injectable({
  providedIn: 'root'
})
export class ApiServerService {
  private url				: string;
  private appUrl		: string;
  private apiJwt		: string;
  private apiDb			: string;
	public currentUser: User;
	private indexeDB	: IDBFactory;
	private requestDB	: IDBOpenDBRequest;
	private dataBase	: IDBDatabase;

  constructor(private http: HttpClient) {
    const ts    = this;
		ts.url    	= environment.APIURL;
    ts.appUrl 	= environment.APPURL;
    ts.apiJwt 	= environment.APIJWT;
		ts.apiDb		= environment.indexedDBName;
		ts.onCreateDb();
  }

  private getHeaders(): HttpHeaders{
    const
      headers = new HttpHeaders()
        .set('Accept', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    return  headers;
  }
	/**
	 * función para crear la base de datos local
	 * @returns void
	 */
	private onCreateDb() {
		const ts    = this;
			// En la siguiente línea, puede incluir prefijos de implementación que quiera probar.
		ts.indexeDB	= window.indexedDB;
		if (!window.indexedDB) {
			window.alert("Su navegador no soporta una versión estable de indexedDB.");
			return;
		}
		// Abre la base de datos
		ts.requestDB	= ts.indexeDB.open(ts.apiDb);
		if(ts.requestDB) {
			ts.requestDB.onsuccess	= (event) => {
				ts.dataBase	= ts.requestDB.result;
			}
			ts.requestDB.onupgradeneeded = (event) => {
				const db = ts.requestDB.result;

				// Se crea un almacén para contener la información del usuario conectado
				// Se usará "ssn" como clave ya que es garantizado que es única
				let objectStore = db.createObjectStore("currentUser",  {keyPath: "id", autoIncrement: true });

				objectStore.createIndex("firtsName", "firtsName", { unique: false });
				objectStore.createIndex("lastName", "lastName", { unique: false });

				// Se crea un índice para buscar clientespor email. Se quiere asegurar que
				// no puedan haberdos clientes con el mismo email, asi que se usa un índice único.
				objectStore.createIndex("email", "email", { unique: true });
			}
		}
	}
	/**
	 * Retorna el objeto de la base de datos
	 * @returns IDBDatabase
	 */
	getDatabase(): IDBDatabase {
		const ts    = this;
		if(!ts.dataBase){
			ts.onCreateDb();
		}
		return this.dataBase;
	}

	 /**
   * @param {string} store_name
   * @param {string} mode either "readonly" or "readwrite"
   */
	getObjectStore(store_name: string, mode: IDBTransactionMode = "readwrite") {
		const ts    = this;
		const	db		= ts.getDatabase();
		if(!db) {
			return undefined;
		}
		return db.transaction(store_name, mode).objectStore(store_name);
	}
	
	clearObjectStore(store_name: string) {
		const ts  	= this;
		const store = ts.getObjectStore(store_name);
		const req 	= store.clear();
		req.onsuccess = function(evt) {
			
		};
		req.onerror = function (evt) {

		};
	}

  openDocument(url: string) {
    window.open(url, '_blank');
  }

  delete(query: string, params: any = {}) {
    const me = this;
    return me.http.delete<JsonResponse>(`${ me.url }${ query }`, { headers : me.getHeaders(), params });
  }

  post(query: string, body: any = {}, token: boolean = false) {
    const me = this;
    return me.http.post<JsonResponse>(`${ me.url }${ query }`, body, { headers : me.getHeaders()});
  }

  put(query: string, body: any, token: boolean = false) {
    const me = this;
    return me.http.put<JsonResponse>(`${ me.url }${ query }`, body, { headers : me.getHeaders()});
  }

  get(query: string, exParams: any = {}) {
    const me = this;
    return me.http.get<JsonResponse>(`${me.url}${ query }`, { headers : me.getHeaders(), params: exParams });
  }

  getUrl(): string{
    return this.url;
  }

  getAppUrl(): string{
    return this.appUrl;
  }

  getApiJwt(): string{
    return this.apiJwt;
  }

  isAuthenticated(): boolean {
    const
      token = this.getToken();
    return (token) ? true : false;
  }

  getToken(): AccessToken{
    const ts  = this;
    let
      token: AccessToken;
    token = JSON.parse(localStorage.getItem(this.getApiJwt()));
    return token;
  }
	
	addUser(user_data: any) {
		const ts    = this;
		const objectStore	= ts.getObjectStore('currentUser');
		objectStore.getAll().onsuccess = (event) => {
			const result = event.target as IDBRequest;
			// Solo se agrega el usuario si no hay ningun registro
			if(result.result.length == 0) {
				objectStore.add(user_data);
			}
		};
	}

	getCurrentUser() {
    const ts    = this;
    let   user: any = {};
    /**
     * Set user value
     */
    if(!localStorage.getItem('currentUser')) {
        const token     = ts.getToken();
				if(token) {
					user.avatar     = `${ts.getAppUrl()}${token.avatar}`; 
					user.email      = token.mail;
					user.firstName  = token.firstName;
					user.lastName   = token.lastName;
					user.token      = token.access_token;
					user.id         = 1;
					localStorage.setItem('currentUser', JSON.stringify(user));
				}
			}

    ts.currentUser  = JSON.parse(localStorage.getItem('currentUser'));
    return ts.currentUser;
  }

  upCurrentUser(data: User) {
    const   ts  = this;
    let   user: any = {};
    user.avatar     = `${ts.getAppUrl()}${data.avatar}`;
    user.email      = data.email;
    user.firstName  = data.firstName;
    user.lastName   = ts.currentUser.lastName;
    user.token      = ts.currentUser.token;
    user.id         = data.id;
    localStorage.removeItem('currentUser');
    localStorage.setItem('currentUser', JSON.stringify(user));
    ts.currentUser  = JSON.parse(localStorage.getItem('currentUser'));
    return ts.currentUser;
  }

	onClearCurrentUser(){
		localStorage.removeItem('currentUser');
		localStorage.removeItem(this.getApiJwt());
	}
}

