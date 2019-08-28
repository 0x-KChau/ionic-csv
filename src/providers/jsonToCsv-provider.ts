import { Injectable } from '@angular/core';

@Injectable()

export class CSVService {

  // conver from json to csv
  public jsonToCsv(data: any) {
    let csvData = [];

    csvData.push(this._pushHeaderToCSV(data[0]));

    data.forEach(ele => {
      csvData.push(this._convertToCSV(ele));
    });

    return csvData;
  }

  // Download CSV
  public downloadCsv(csvData: any, filename: string){
    var blob = new Blob(csvData, { type: 'text/csv' });

    var a: any = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    var url= window.URL.createObjectURL(blob);
    a.href = url;

    var isIE = /*@cc_on!@*/false || !!(<any> document).documentMode;

    if (isIE)
    {
        var retVal = navigator.msSaveBlob(blob, filename+'.csv');
    }
    else{
        a.download = filename+'.csv';
    }
    // If you will any error in a.download then dont worry about this.
    a.click();
  }


  private _pushHeaderToCSV(obj: any) {
    var row = "";

    for (var o in obj) {
        //Now convert each value to string and comma-seprated
        row += o + ',';
    }

    row = row.slice(0, -1);

    return row;
  }


  // convert Json to CSV data
  private _convertToCSV(objArray: any) {
    var array = objArray.length ? objArray : [objArray] ;
    var str = '';

    //append Label row with line break
    str += '\r\n';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var obj in array[i]) {
          if (line != '') line += ','
          line += '"' + array[i][obj] + '"';
        }
        str += line + '\r\n';
    }

    return str;
  }
}
