import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostPageRoute } from './post/post-routing.module';

const routes: Routes = [
  PostPageRoute,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
