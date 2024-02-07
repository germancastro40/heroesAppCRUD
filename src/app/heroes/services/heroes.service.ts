import { Hero } from './../interfaces/hero.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { environments } from '../../../environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {

    private baseUrl:string = environments.baseUrl
    constructor(private http: HttpClient) { }
    

    getHeroes():Observable<Hero[]>{
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
    }

    getHeroById( id: string):Observable<Hero | undefined>{
        // if( !id ) throw Error(`El id: "${id}", proporsionado no existe`)

        return this.http.get<Hero>(`${this.baseUrl}/heroes/${ id }`)
        .pipe(
            catchError( () => of(undefined) )
        )
    }

    getSuggestions(q: string):Observable<Hero[]>{
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${q}&_limit=6`)
    }

    addHero(hero:Hero):Observable<Hero>{
        return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero)
    }

    updateHero(hero:Hero):Observable<Hero>{
        if(!hero.id) throw Error('Hero ID is required')
        return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero)
    }

    deleteHeroById(id:string):Observable<boolean>{
        return this.http.delete(`${this.baseUrl}/heroes/${id}`)
        .pipe(
            catchError( err => of(false)),
            map( resp => true )
        );
    }
}