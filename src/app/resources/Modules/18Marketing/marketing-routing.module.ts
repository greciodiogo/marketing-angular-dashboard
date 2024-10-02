import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/security/guards/auth.guard';
import { PermissionGuard } from '@core/security/guards/permission.guard';

const routes: Routes = [
  {
    path: 'campanhas',
    data: {
      title: 'Campanhas',
      layout: { customLayout: false, layoutNavigationTop: true },
    },
    loadChildren: () =>
      import('./01Campanhas/campanha.module').then((m) => m.CampanhasModule),
  },

  {
    path: 'promocao',
    data: {
      title: '',
    },
    loadChildren: () =>
      import('./00Promocao/promocao.module').then(
        (m) => m.PromocaoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketingRoutingModule {}
