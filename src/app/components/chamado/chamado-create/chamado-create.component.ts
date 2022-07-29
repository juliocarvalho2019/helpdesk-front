import { TecnicoService } from 'src/app/services/tecnico.service';
import { ChamadoService } from './../../../services/chamado.service';
import { Tecnico } from './../../../models/tecnico';
import { Cliente } from './../../../models/cliente';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.css']
})
export class ChamadoCreateComponent implements OnInit {

  clientes: Cliente[] = []
  tecnicos: Tecnico[] = []

  prioridade: FormControl = new FormControl(null, [Validators.required])
  status: FormControl = new FormControl(null, [Validators.required])
  titulo: FormControl = new FormControl(null, [Validators.required])
  descricao: FormControl = new FormControl(null, [Validators.required])
  tecnico: FormControl = new FormControl(null, [Validators.required])
  cliente: FormControl = new FormControl(null, [Validators.required])

  constructor(
    private chadoService: ChamadoService,
    private clienteService: ClienteService,
    private tecnicoService: TecnicoService
    ) { }

  ngOnInit(): void {
    this.findAllClientes();
    this.findAllTecnicos();
  }

  findAllClientes(): void {
    this.clienteService.findAll().subscribe(reposta => {
      this.clientes = reposta;
    })
  }

  findAllTecnicos(): void {
    this.tecnicoService.findAll().subscribe( respota => {
      this.tecnicos = respota;
    })
  }

  validaCampos(): boolean{
    return this.prioridade.valid && this.status.valid && this.titulo.valid &&
    this.descricao.valid && this.tecnico.valid && this.cliente.valid
  }

}
