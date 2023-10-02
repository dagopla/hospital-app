import { Component, ViewEncapsulation } from '@angular/core';
import { select, selectAll } from 'd3-selection';
import { transition } from 'd3-transition';
import { forceSimulation, forceLink, forceManyBody, forceCenter } from 'd3-force';
import { drag } from 'd3-drag';
const d3 = { select, selectAll, transition, forceSimulation, forceLink, forceManyBody, forceCenter, drag };
@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  encapsulation: ViewEncapsulation.None, 
  styleUrls: ['./flowchart.component.scss']
})
export class FlowchartComponent {

  nodes = [
    { id: 'start', label: 'Start' },
    { id: 'step1', label: 'Step 1' },
    { id: 'step2', label: 'Step 2' },
    { id: 'end', label: 'End' },
  ];

  links = [
    { source: 'start', target: 'step1' },
    { source: 'step1', target: 'step2' },
    { source: 'step2', target: 'end' },
  ];

  constructor() {}

  ngOnInit(): void {}

  onNodeClick(event: any): void {
    
    const clickedNodeId = event.id;
    this.nodes = this.nodes.map(node => {
      if (node.id === clickedNodeId) {
        return { ...node, color: 'yellow' };
      } else {
        return node;
      }
    });
  }
}
