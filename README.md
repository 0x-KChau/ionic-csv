# ionic-csv

## Introduction
This is a simple json to csv convertor for Ionic.

## Get Started

### Installation

```
npm install ionic-csv --save
```

### Example Usage
```

// inside your app.module.ts

...
import { JsonToCSVModule, CSVService } from 'ionic-csv';

@NgModule({
  ...,
  imports: [
    ...,
    JsonToCSVModule
  ],
  providers: [
    ...,
    CSVService
  ],
});

export class AppModule {}

```

```  

// inside your component page

import { CSVService } from 'ionic-csv';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor( private _csvService: CSVService ) { }

  private _csvData: any = null;
  private _fileName: any = null;

  public jsonToCsv(data: any) {
    // pass the object array to the function
    // return an array in csv format
    this._csvData = this._csvService.jsonToCsv(data);
  }

  public downloadCsv() {
    // pass the csv data and file name to the function
    // csv file will be download simultaneously
    this._csvService.downloadCsv(this._csvData, this._fileName);
  }

  ...

}

```


## API

### CSVService.jsonToCsv(data)

#### Property

* `data`: object array


### CSVService.downloadCsv(csvData, fileName)

#### Property

* `csvData`: csv array

* `fileName`: string



## Usage with Ionic

### Pre-requisites
Before you can begin using these csv service with your project, you need to make sure your project meets a few of these requirements:

"typescript" >= 2.6.2

"ionic-angular" >= 3.9

"@ionic/app-scripts" >= 3.2.2

"@angular/core" >= 5.2.11


## Contributing
This ionic-csv wrapper is an Open Source Package. So it is open to any contributors.


## License
MIT
