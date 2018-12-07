import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmiibosDetailComponent } from './amiibos-detail.component';

describe('AmiibosDetailComponent', () => {
  let component: AmiibosDetailComponent;
  let fixture: ComponentFixture<AmiibosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmiibosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmiibosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
