import {Component, inject, OnInit} from '@angular/core';
import {EventService} from '../shared/services/event.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-edit-event',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css'
})
export class EditEventComponent implements OnInit{
  eventService: EventService = inject(EventService);
  fb: FormBuilder = inject(FormBuilder);
  route: ActivatedRoute = inject(ActivatedRoute);

  id: number = this.route.snapshot.params['id'];
  event$: Observable<Event> = this.eventService.getEventById(this.id);

  editEventForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', Validators.required],
    startLocation: ['', Validators.required],
    distance: ['', Validators.required],
    date: ['', Validators.required],
    region: ['', Validators.required],
    price: ['', Validators.required],
    goodies: ['', Validators.required]
  })

  ngOnInit(): void {
    this.event$.subscribe((event) => {
      this.editEventForm.patchValue(event);
    })
  }

  onSubmit(): void{
    if(this.editEventForm.valid){
      const updatedEvent: Event = {...this.editEventForm.value};
      this.eventService.updateEvent(this.id, this.editEventForm.value).subscribe( () =>{
        this.editEventForm.reset();
      })
    }
  }

}
