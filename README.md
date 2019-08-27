# ionic-csv

## Introduction
This is a simple csv convertor for Ionic.

## Get Started

### Installation

```
npm install ionic-csv --save
```

### Example Usage
```

// inside your app.module.ts

...
import { IonicCsvModule, CSVService } from 'ionic-csv';

@NgModule({
  ...,
  imports: [
    ...,
    IonicCsvModule
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



  ...

}

```

The above example uses the [Mosquitto broder/server](https://test.mosquitto.org/), if you want to run your own localhost CSV broker, you can use [Mosquitto](https://mosquitto.org/) or [Mosca](http://www.mosca.io/), to launch your own broker. Remember to change the host, port and clientId to your localhost server respectively.


## API



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
