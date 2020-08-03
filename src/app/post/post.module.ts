import { NgModule } from '@angular/core';

import { PostListComponent } from './post-list/post-list.component';
import { PostRoutingModule } from './post-routing.module';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostListComponent, PostDetailComponent, SearchPipe],
  imports: [PostRoutingModule, CommonModule, FormsModule],
})
export class PostModule {}
