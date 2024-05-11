import { Injectable, computed, inject, signal } from '@angular/core';
import { MPP1 } from '../interfaces/mpp1';
import { HttpClient } from '@angular/common/http';

interface State {
  mpp1: MPP1[];
  loading: boolean;
}

@Injectable({providedIn: 'root'})
export class DashboardService {

  private urlAPISheets: string = 'https://script.google.com/macros/s/AKfycbyIdpUm6RoqgKCdgVIIHKSMRH39UnhodnZz-iQpvWqDpygOupnuvIfiL1QsiZOicMhLEw/exec';

  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    mpp1: []
  });

  public mpp1List = computed( () => this.#state().mpp1 )
  public loading = computed( () => this.#state().loading )


  constructor() {
    this.http.get<MPP1[]>(this.urlAPISheets)
      .subscribe( resp => {

        this.#state.set({
          loading: false,
          mpp1: resp
        })
      })
  }

}
