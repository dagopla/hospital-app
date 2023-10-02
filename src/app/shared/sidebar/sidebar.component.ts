import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements  OnInit {
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('sidebarBackdrop') sidebarBackdrop!: ElementRef;
  @ViewChild('toggleSidebarMobileHamburger') toggleSidebarMobileHamburger!: ElementRef;
  @ViewChild('toggleSidebarMobileClose') toggleSidebarMobileClose!: ElementRef;

  ngOnInit(): void {
    const toggleSidebarMobile = () => {
      this.sidebar.nativeElement.classList.toggle('hidden');
      this.toggleSidebarMobileHamburger.nativeElement.classList.toggle('hidden');
      this.toggleSidebarMobileClose.nativeElement.classList.toggle('hidden');
    };

    const toggleSidebarMobileEl = document.getElementById('toggleSidebarMobile');
    const toggleSidebarMobileSearch = document.getElementById('toggleSidebarMobileSearch');

    if (toggleSidebarMobileSearch) {
      toggleSidebarMobileSearch.addEventListener('click', () => {
        toggleSidebarMobile();
      });
    }

    if (toggleSidebarMobileEl) {
      toggleSidebarMobileEl.addEventListener('click', () => {
        toggleSidebarMobile();
      });
    }

    // if (this.sidebarBackdrop.nativeElement) {
    //   this.sidebarBackdrop.nativeElement.addEventListener('click', () => {
    //     toggleSidebarMobile();
    //   });
    // }
  }
}
