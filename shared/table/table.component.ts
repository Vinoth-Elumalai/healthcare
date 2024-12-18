import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import {
  AllCommunityModule,
  ModuleRegistry,
  RowSelectionOptions,
} from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

// Row Data Interface
interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

@Component({
  standalone: true,
  imports: [AgGridAngular],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TableComponent {
  // Row Data: The data to be displayed.

  rowData: any[] = [
    {
      id: 1,
      no: 1,
      dob: '01 Jan 1990',
      name: 'Jon Snow',
      age: 35,
      status: 'Active',
      email: 'jon.snow@email.com',
      phone: '(233) 555-0101',
      action: '',
    },
    {
      id: 2,
      no: 2,
      dob: '22 Jun 1983',
      name: 'Cersei Lannister',
      age: 42,
      status: 'Active',
      email: 'cersei.lannister@email.com',
      phone: '(233) 555-0102',
      action: '',
    },
    {
      id: 3,
      no: 3,
      dob: '23 Aug 1978',
      name: 'Jaime Lannister',
      age: 45,
      status: 'Active',
      email: 'jaime.lannister@email.com',
      phone: '(233) 555-0103',
      action: '',
    },
    {
      id: 4,
      no: 4,
      dob: '23 Apr 2007',
      name: 'Arya Stark',
      age: 16,
      status: 'Active',
      email: 'arya.stark@email.com',
      phone: '(233) 555-0104',
      action: '',
    },
    {
      id: 5,
      no: 5,
      dob: '15 Jun 1994',
      name: 'Daenerys Targaryen',
      age: 30,
      status: 'Active',
      email: 'daenerys.targaryen@email.com',
      phone: '(233) 555-0105',
      action: '',
    },
    {
      id: 6,
      no: 6,
      dob: '03 Nov 1874',
      name: 'Melisandre',
      age: 150,
      status: 'Inactive',
      email: 'melisandre@email.com',
      phone: '(233) 555-0106',
      action: '',
    },
    {
      id: 7,
      no: 7,
      dob: '19 Feb 1979',
      name: 'Clifford Ferrara',
      age: 44,
      status: 'Active',
      email: 'clifford.ferrara@email.com',
      phone: '(233) 555-0107',
      action: '',
    },
    {
      id: 8,
      no: 8,
      dob: '11 Mar 1988',
      name: 'Frances Rossini',
      age: 36,
      status: 'Active',
      email: 'frances.rossini@email.com',
      phone: '(233) 555-0108',
      action: '',
    },
    {
      id: 9,
      no: 9,
      dob: '25 Jul 1958',
      name: 'Roxie Harvey',
      age: 65,
      status: 'Active',
      email: 'roxie.harvey@email.com',
      phone: '(233) 555-0109',
      action: '',
    },
    {
      id: 10,
      no: 10,
      dob: '23 Apr 2007',
      name: 'Arya Stark',
      age: 16,
      status: 'Active',
      email: 'arya.stark@email.com',
      phone: '(233) 555-0104',
      action: '',
    },
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<any>[] = [
    { field: 'no', headerName: 'S.No' },
    { field: 'name' },
    { field: 'age' },
    { field: 'dob' },
    { field: 'status' },
    { field: 'email' },
    { field: 'phone' },
    {
      field: 'action',
    },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };

  public rowSelection: RowSelectionOptions | 'single' | 'multiple' = {
    mode: 'multiRow',
    headerCheckbox: false,
  };
  public paginationPageSize = 5;
  public paginationPageSizeSelector: number[] | boolean = [10, 25, 50];
}
