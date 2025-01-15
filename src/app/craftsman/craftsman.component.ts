import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CraftsmanDataService } from '../craftsman-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-craftsman',
  templateUrl: './craftsman.component.html',
  styleUrl: './craftsman.component.scss',
})
export class CraftsmanComponent {
  craftsman: any = {};
  craftsmanId: string | null = '';
  note: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private craftsmanService: CraftsmanDataService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.craftsmanId = this.activatedRoute.snapshot.params['id'];
    this.craftsman = (await this.craftsmanService.getDataCrafstman()).find(
      (x: any) => x.id == this.craftsmanId,
    );
    this.note = this.craftsman.note.replace('.', ',');
  }

  //---------------
  // FORM PART
  //---------------

  form = new FormGroup({
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('[a-zA-Zéèêàîùôçïäâëüöœ -]*'),
    ]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('[a-zA-Zéèêàîùôçïäâëüöœ -]*'),
    ]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', [
      Validators.required,
      Validators.maxLength(60),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.maxLength(1000),
    ]),
  });

  // This is used to control the display of <p> below the submitting button
  trySendInvalidForm = false;
  sendInvalidForm() {
    this.trySendInvalidForm = true;
  }

  // This is used as parameter in emailjs.send()
  templateParams = () => {
    return {
      craftsmanName: this.craftsman.name,
      craftsmanMail: this.craftsman.email,
      lastName: this.form.value.lastName?.toUpperCase(),
      firstName: this.form.value.firstName,
      mail: this.form.value.mail,
      subject: this.form.value.subject,
      message: this.form.value.message,
    };
  };

  // Form submission
  async sendMail() {
    try {
      this.trySendInvalidForm = false;
      emailjs.init(environment.apiKeyEmailjs);
      let response = await emailjs.send(
        environment.serviceIdEmailjs,
        environment.templateIdToCraftsmanEmailjs,
        this.templateParams(),
      );
      let autoReply = await emailjs.send(
        environment.serviceIdEmailjs,
        environment.templateIdAutoReplyEmailjs,
        this.templateParams(),
      );
      this.form.reset();
      alert('Merci, votre message a bien été envoyé. Un mail récapitulatif vous a été envoyé.');
    } catch (error:any) {
      error.name = "Error in craftsman.component - " + error.name;
      alert("Le service d'envoi d'email est indisponible pour le moment. Nous tentons de le rétablir au plus vite. Merci de votre compréhension.");
      throw error;
    }
  }

  //---------------
  // STARS PART
  //---------------

  // Used for the tackBy for each star generated by the ngFor in card-top-craftsman.componenet.html
  starId(index: number, star: any): number {
    return star.id;
  }

  stars: any[] = [
    {
      id: 'star-1',
      fill: '0%',
    },
    {
      id: 'star-2',
      fill: '0%',
    },
    {
      id: 'star-3',
      fill: '0%',
    },
    {
      id: 'star-4',
      fill: '0%',
    },
    {
      id: 'star-5',
      fill: '0%',
    },
  ];
}