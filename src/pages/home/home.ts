import { KontakteProvider } from './../../providers/kontakte/kontakte';
import { Component } from '@angular/core';

import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
import { AccountsPage } from "../accounts/accounts";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public reorderIsEnabled = false;
  //public accountsPage = AccountsPage;

  constructor(
    private toastController: ToastController,
    public navCtrl: NavController, 
    private alertController: AlertController,
    private kontakteProvider: KontakteProvider){
      this.todos = this.kontakteProvider.getTodos();
    }
    

  navToAccountsPage() {
    this.navCtrl.push(AccountsPage);
  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReordered($event){
    reorderArray(this.todos, $event);
  }

  archiveTodo(todoIndex) {
    this.kontakteProvider.archiveTodo(todoIndex);
  }

  openTodoAlert(){
    let addTodoAlert = this.alertController.create({
      title: "Add A Todo",
      message: "Enter Your Todo",
      inputs: [
        {
          type: "text",
          name: "addTodoInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add Todo",
          handler: (inputData)=> {
            let todoText;
            todoText = inputData.addTodoInput;
            //this.todos.push(todoText);
            this.kontakteProvider.addTodo(todoText);

            addTodoAlert.onDidDismiss(()=> {
              let addTodoToast = this.toastController.create({
                message: "Todo added",
                duration: 2000
              });
              addTodoToast.present();
            });            
          }
        }
      ]
    });
    addTodoAlert.present();

  }

  editTodo(todoIndex) {
    let editTodoAlert = this.alertController.create({
      title: "Edit a Todo",
      message: "Edit Todo",
      inputs: [
        {
          type: "text",
          name: "editTodoInput",
          value: this.todos[todoIndex]   
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: (inputData)=> {
            let todoText;
            todoText = inputData.editTodoInput;
            this.kontakteProvider.editTodo(todoText, todoIndex);

            editTodoAlert.onDidDismiss(()=> {
              let editTodoToast = this.toastController.create({
                message: "Todo Edited",
                duration: 2000
              });
              editTodoToast.present();
            });
          }
        },
      {
        text: "Done"
      }
    ]

    })
  }

}
