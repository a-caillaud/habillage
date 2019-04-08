import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'product',
                loadChildren: './product/product.module#HabillageProductModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#HabillageProductCategoryModule'
            },
            {
                path: 'customer',
                loadChildren: './customer/customer.module#HabillageCustomerModule'
            },
            {
                path: 'product-order',
                loadChildren: './product-order/product-order.module#HabillageProductOrderModule'
            },
            {
                path: 'order-item',
                loadChildren: './order-item/order-item.module#HabillageOrderItemModule'
            },
            {
                path: 'invoice',
                loadChildren: './invoice/invoice.module#HabillageInvoiceModule'
            },
            {
                path: 'shipment',
                loadChildren: './shipment/shipment.module#HabillageShipmentModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HabillageEntityModule {}
