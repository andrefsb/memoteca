import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  listaPensamentos = [{
    id: '1',
    conteudo: 'Teste1',
    autoria: 'Dev',
    modelo: 'modelo1'
  },
  {
    id: '2',
    conteudo: 'Teste2',
    autoria: 'Dev',
    modelo: 'modelo2'
  }];

}
