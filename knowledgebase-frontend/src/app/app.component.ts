import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'knowledgebase-frontend';
    items: MenuItem[];
    contentEditor = false;

    constructor(private primeNGConfig: PrimeNGConfig,
                private router: Router) {
    }

    ngOnInit(): void {
        this.primeNGConfig.ripple = true;
        this.router.events.subscribe(value => {
            console.log('split size: ' + window.location.href.split('/').length);
            if (window.location.href.includes('/editor/') && window.location.href.split('/').length === 5) {
                this.contentEditor = true;
                this.items.find(item => item.label === 'Entities').visible = true;
            } else {
                this.items.find(item => item.label === 'Entities').visible = false;
            }
        });
        this.items = [
            {
                label: 'Home',
                url: environment.url
            },
            {
                label: 'Entities',
                visible: false,
                items: [
                    {
                        label: 'Wearable Category',
                        icon: 'pi pi-fw pi-align-left',
                        routerLink: 'editor/wearablecategory',
                    },
                    {
                        label: 'Wearable',
                        icon: 'pi pi-fw pi-align-left',
                        routerLink: 'editor/wearable'
                    },
                    {
                        label: 'Process Category',
                        icon: 'pi pi-fw pi-align-left',
                        routerLink: 'editor/processcategory'
                    },
                    {
                        label: 'Process',
                        icon: 'pi pi-fw pi-align-left',
                        routerLink: 'editor/process'
                    },
                    {
                        label: 'Activity',
                        icon: 'pi pi-fw pi-align-left',
                        routerLink: 'editor/activity'
                    },
                    {
                        label: 'Datatype',
                        icon: 'pi pi-fw pi-align-left',
                        routerLink: 'editor/datatype'
                    },
                    {
                        label: 'Interface',
                        icon: 'pi pi-fw pi-align-left',
                        routerLink: 'editor/interface'
                    },
                    {
                        label: 'Feature',
                        icon: 'pi pi-fw pi-align-left',
                        routerLink: 'editor/feature'
                    }
                ]
            }
        ];
    }

    async isCurrentContentEditor(): Promise<boolean> {
        return Promise.resolve(this.contentEditor);
    }
}
