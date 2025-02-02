"use client";

import React, { useState, useMemo } from "react";
import { Lead } from "../../Types/Leads";
import { LeadsData } from "../../Mocks/LeadsData";
import { AgGridReact } from "ag-grid-react";
import type { ColDef, ICellRendererParams } from "ag-grid-community";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeAlpine,
} from "ag-grid-community";
import type { CustomCellRendererProps } from "ag-grid-react";
import { IoMdSearch } from "react-icons/io";

const Leads = () => {
  const [rowData, setRowData] = useState<Lead[]>(LeadsData);
  const [colDefs, setColDefs] = useState<ColDef<Lead>[]>([
    { field: "name", flex: 2 },
    { field: "submitted", flex: 2 },
    {
      field: "status",
      flex: 2,
      cellRendererSelector: (params: ICellRendererParams<Lead>) => {
        const statusDropdown = {
          component: statusCellRenderer,
        };
        if (params.data) {
          if (
            params.data.status === "Pending" ||
            params.data.status === "Reached Out"
          )
            return statusDropdown;
        }
        return undefined;
      },
    },
    { field: "country", flex: 2 },
  ]);

  const pagination = true;
  const paginationPageSize = 10;
  const theme = themeAlpine;

  ModuleRegistry.registerModules([AllCommunityModule]);

  const statusCellRenderer = (props: CustomCellRendererProps) => {
    // TODO: Work In-Progress - Fix gridStatusFilterHandler
    const gridStatusFilterHandler = (x: any, e: any) => {
      e?.preventDefault();
      const newStatusSelection = e?.target?.value || "";
      if (x?.id && newStatusSelection) {
        const updatedRowData = LeadsData.reduce((acc, cur) => {
          if (cur.id === x.id) {
            const newData = { ...cur, status: newStatusSelection };
            acc.push(newData);
          } else {
            acc.push(cur);
          }
          return acc;
        }, []);
        setRowData(updatedRowData);
      }
    };

    return (
      <div className="max-w-xs">
        <select
          className="select select-bordered border-0 w-full text-xs h-0 rounded-none max-h-xs"
          value={props.data.status}
          onChange={(e) => gridStatusFilterHandler(props.data, e)}
        >
          <option value="Pending">Pending</option>
          <option value="Reached Out">Reached Out</option>
        </select>
      </div>
    );
  };

  const searchHandler = (e: any) => {
    e?.preventDefault();
    const key = e?.target?.value || "";
    if (key?.length > 1) {
      const filteredRowData = LeadsData.filter((lead) => {
        if (lead.name) {
          const leadName = lead.name.toLocaleLowerCase();
          const keyLowerCase = key.toLocaleLowerCase();
          if (leadName.includes(keyLowerCase)) {
            return lead;
          }
        }
      });
      setRowData(filteredRowData);
    } else {
      setRowData(LeadsData);
    }
  };

  const statusFilterHandler = (e: any) => {
    e?.preventDefault();
    const key = e?.target?.value || "";
    if (key?.length > 1) {
      const filteredRowData = LeadsData.filter((lead) => {
        if (lead.status === key) {
          return lead;
        }
      });
      setRowData(filteredRowData);
    } else {
      setRowData(LeadsData);
    }
  };

  return (
    <div className="w-full h-full">
      <h1 className="text-3xl font-black mt-10 mb-5">Leads</h1>

      {/* Search box */}
      <div className="flex flex-row mt-10 mb-5">
        <div className="max-w-lg mr-5">
          <label className="input input-bordered flex items-center gap-2 rounded-xl">
            <IoMdSearch />
            <input
              type="text"
              className="grow"
              placeholder="Search"
              onKeyUp={searchHandler}
            />
          </label>
        </div>

        {/* Status Dropdown */}
        <div className="max-w-xs">
          <select
            className="select select-bordered max-w-xs rounded-2xl"
            onChange={statusFilterHandler}
          >
            <option defaultValue="" value="">
              Status
            </option>
            <option value="Pending">Pending</option>
            <option value="Reached Out">Reached Out</option>
          </select>
        </div>
      </div>

      {/* Leads Grid */}
      <div className="w-full h-3/4 rounded-2xl">
        <AgGridReact
          theme={theme}
          rowData={rowData}
          columnDefs={colDefs}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={false}
        />
      </div>
    </div>
  );
};

export default Leads;
