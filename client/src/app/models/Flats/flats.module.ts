import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { CreatePostsComponent } from "./Create/create.module";
import { DetailsComponent } from './Details/details.component';
import { EditComponent } from './Edit/edit.component';
import { SearchComponent } from './Search/search.component';

@NgModule({
    declarations: [
        CreatePostsComponent,
        DetailsComponent,
        EditComponent,
        SearchComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ]
})

export class PaintingsModule {}