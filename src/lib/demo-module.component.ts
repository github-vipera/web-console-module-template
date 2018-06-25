import { Component, OnInit } from '@angular/core';
import { PluginView } from 'web-console-core'
@Component({
  selector: 'vp-demo-module',
  template: `
    <p>
      demo-module works!
    </p>
  `,
  styles: []
})
@PluginView("demo",{
  dependencies:[{
    name:"com.vipera.plugin.demomodule",
    version:"0.0.1"
  }]
})
export class DemoModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
