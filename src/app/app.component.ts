import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import {Diagram,
  NodeModel,
  UndoRedo,
  ConnectorModel,
  PointPortModel,
  Connector,
  FlowShapeModel,
  SymbolInfo,
  IDragEnterEventArgs,
  SnapSettingsModel,
  MarginModel,
  TextStyleModel,
  StrokeStyleModel,
  OrthogonalSegmentModel,
  Node,
  PaletteModel,
  NodeConstraints,
  IDropEventArgs,
  randomId, 
  DiagramComponent} from '@syncfusion/ej2-angular-diagrams';
import { recordDoubleClick } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'dragAndDrop';


// public diagram: DiagramComponent;

// public node: NodeModel = {
//     // Position of the node
//     offsetX: 250,
//     offsetY: 250,
//     // Size of the node
//     width: 100,
//     height: 100,
//     style: {
//         fill: '#6BA5D7',
//         strokeColor: 'white'
//     },
// };
// public created(args: Object): void {
//   //Add Node
//   console.log(this.diagram);
//   this.diagram.add(this.node);
// }
@ViewChild("diagram")
//Diagram Properties
public diagram: DiagramComponent;

public created(event): void {
  let node: NodeModel = 
    {
      // Position of the node
      offsetX: 100,
      offsetY: 100,
      // Size of the node
      width: 100,
      height: 100,
      style: {
          fill: '#6BA5D7',
          strokeColor: 'white'
      },
      annotations: [
        {
          content: 'Project Name',
          
        }
      ]
  };
  this.diagram.add(node);
}
public interval: number[] = [
  1,
  9,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75,
  0.25,
  9.75
];

public snapSettings: SnapSettingsModel = {
  horizontalGridlines: { lineColor: "#e0e0e0", lineIntervals: this.interval },
  verticalGridlines: { lineColor: "#e0e0e0", lineIntervals: this.interval }
};

public diagramCreate() {

}

//SymbolPalette Properties
public symbolMargin: MarginModel = {
  left: 15,
  right: 15,
  top: 15,
  bottom: 15
};
//public expandMode: ExpandMode = "Multiple";
//Initialize the flowshapes for the symbol palatte
private flowshapes: NodeModel[] = [
  {
    id: "Rectangle",
    shape: { type: "Basic", shape: "Rectangle" },
    height: 75,
    width: 75,
    
  },
  {
    id: "Ellipse",
    shape: { type: "Basic", shape: "Ellipse" },
    height: 75,
    width: 75
  },
  {
    id:"Triangle",
    shape:{ type: "Basic", shape:"Triangle"},
    height: 75,
    width: 75
  },
  {
    id:"Pentagon",
    shape:{ type: "Basic", shape:"Pentagon"},
    height: 75,
    width: 75
  },
  {
    id: "Rectangle2",
    shape: { type: "Basic", shape: "Rectangle" },
    height: 75,
    width: 75,
    style:{
     fill: '#6BA5D7',
    }
  },
  {
    id: "Ellipse2",
    shape: { type: "Basic", shape: "Ellipse" },
    height: 75,
    width: 75,
    style:{
      fill: '#6BA5D7',
     }
  },
  {
    id:"Triangle2",
    shape:{ type: "Basic", shape:"Triangle"},
    height: 75,
    width: 75,
    style:{
      fill: '#6BA5D7',
     }
  },
  {
    id:"Pentagon2",
    shape:{ type: "Basic", shape:"Pentagon"},
    height: 75,
    width: 75,
    style:{
      fill: '#6BA5D7',
     }
  },
  {
    id: "Rectangle3",
    shape: { type: "Basic", shape: "Rectangle" },
    height: 75,
    width: 75,
    style:{
      fill: 'red',
     }
    
  },
  {
    id: "Ellipse3",
    shape: { type: "Basic", shape: "Ellipse" },
    height: 75,
    width: 75,
    style:{
      fill: 'red',
     }
  },
  {
    id:"Triangle3",
    shape:{ type: "Basic", shape:"Triangle"},
    height: 75,
    width: 75,
    style:{
      fill: 'red',
     }
  },
  {
    id:"Pentagon3",
    shape:{ type: "Basic", shape:"Pentagon"},
    height: 75,
    width: 75,
    style:{
      fill: 'red',
     }
  },
];



public palettes: PaletteModel[] = [
  {
    id: "flow",
    expanded: true,
    symbols: this.flowshapes,
    iconCss: "shapes",
    title: "Flow Shapes"
  }
];

public drop(args: IDropEventArgs) {
  if (args.element instanceof Node && this.diagram.nodes.length > 0) {
    if (args.element.id !== (args.target as NodeModel).id) {
      args.cancel = true;
      //Argument element is used to get the dropped node.
      let node: NodeModel = args.element;
      console.log("element:",args.element)
      console.log(node)
      let newNode: NodeModel = {
        id: "node" + randomId(),
        offsetX: args.element.offsetX,
        offsetY: args.element.offsetY + 100,
        shape: args.element.shape,
        height: 75,
        width: 75,
        style:{
          fill:args.element.style.fill
        },
        constraints: NodeConstraints.Default | NodeConstraints.AllowDrop
      };
      this.diagram.add(newNode);

      let connector: ConnectorModel = {
        id: "connector" + randomId(),
        sourceID: (args.target as NodeModel).id,
        targetID: newNode.id,
      };
      this.diagram.add(connector);
    } else {
      alert("Node does not dropped on other node!!!!");
    }
  }
}

public getSymbolInfo(symbol: NodeModel): SymbolInfo {
  return { fit: true };
}

public getSymbolDefaults(symbol: NodeModel): void {
  symbol.constraints = NodeConstraints.Default | NodeConstraints.AllowDrop;
}
}
