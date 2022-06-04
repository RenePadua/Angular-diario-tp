import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { DiarioComponent } from './diario/diario.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent },
      { path: 'tarefa', component: TarefaComponent },
      { path: 'diario', component: DiarioComponent },
      { path: 'usuario', component: UsuarioComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    IndexComponent,
    TarefaComponent,
    DiarioComponent,
    UsuarioComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
