import {Component} from '@angular/core';


@Component({
    selector: 'my-year-calendar',
    templateUrl: 'my-year-calendar.html'
})
export class MyYearCalendarComponent {

    _weekArray: string[] = ['一', '二', '三', '四', '五', '六', '日'];
    color: string = 'primary';

    constructor() {

    }

}
