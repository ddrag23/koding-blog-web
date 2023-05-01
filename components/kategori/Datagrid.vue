<script lang="ts" setup>
import {
  DxDataGrid,
  DxColumn,
  DxPaging,
  DxPager,
} from "devextreme-vue/data-grid";
import CustomStore from "devextreme/data/custom_store";
function isNotEmpty(value: any) {
  return value !== undefined && value !== null && value !== "";
}
const dataSource = new CustomStore({
  key: "OrderNumber",
  load(loadOptions: any) {
    let params = "?";
    [
      "skip",
      "take",
      "requireTotalCount",
      "requireGroupCount",
      "sort",
      "filter",
      "totalSummary",
      "group",
      "groupSummary",
    ].forEach((i) => {
      if (i in loadOptions && isNotEmpty(loadOptions[i])) {
        params += `${i}=${JSON.stringify(loadOptions[i])}&`;
      }
    });
    params = params.slice(0, -1);
    return fetch(
      `https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/orders${params}`,
      {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiIxMWI0NTM3OS00YTljLTRmZjYtODhlYi0yMTYyYzRhYTE0OWUiLCJpYXQiOiIwMS8wNS8yMDIzIDA3OjI1OjI1IiwiVXNlcklkIjoiMSIsIk5hbWUiOiJzdXBlcmFkbWluIiwiRW1haWwiOiJzdXBlcmFkbWluQGJsb2cuaWQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJzdXBlcmFkbWluIiwiZXhwIjoxNjgzNTMwNzI1LCJpc3MiOiJKV1RBdXRoZW50aWNhdGlvblNlcnZlciIsImF1ZCI6IkpXVFNlcnZpY2VQb3N0bWFuQ2xpZW50In0.B9KrC75OcdQ6uNhCczvMRVKSL-3eJsnndcC3rYKGF_U",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => ({
        data: data.data,
        totalCount: data.totalCount,
        summary: data.summary,
        groupCount: data.groupCount,
      }))
      .catch(() => {
        throw new Error("Data Loading Error");
      });
  },
});
</script>
<template>
  <DxDataGrid
    :data-source="dataSource"
    :show-borders="true"
    :remote-operations="true"
  >
    <DxColumn data-field="categoryName" data-type="string" title="Nama" />
    <DxPaging :page-size="12" />
    <DxPager
      :show-page-size-selector="true"
      :allowed-page-sizes="[8, 12, 20]"
    />
  </DxDataGrid>
</template>
