import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience = [
    {
      "id": "1",
      "title": "Checkmarx \n Application Security Engineer",
      "dates": "Jul 2019 - Now",
      "description": "- Analysis of applications architecture, technologies and source code for potential security threats. \n - Development of new heuristics to meet the client’s security requirements, also improving the service accuracy, using Checkmarx security tools. \n - Research and POC’s based on vectors of attack and mitigation strategies."
    },
    {
      "id": "2",
      "title": "Accenture \n Application Development Analyst",
      "dates": "Apr 2018 - Jul 2019",
      "description": "- Development of custom SAPUI5/Fiori applications \n - Administration and modeling of SAP HANA schemas \n - Development of Integration scenarios, including data migration with SAP Smart Data Integration, CPI-PI and CPI-DS \n - Development of applications in SAP Cloud Foundry environment \n - Development of Models and Stories on SAP Cloud Analytics."
    },
    {
      "id": "3",
      "title": "Accenture \n Application Development Associate",
      "dates": "Feb 2017 - Apr 2018",
      "description": "- Development of SAPUI5/Fiori applications \n - Development in SAP HANA SQL including Hana Views and procedures. \n - Development of applications in Extended Services (XS) with Hana (XSOdata and XSJS services) integration. \n - Configuration of OData Services on SAP Gateway \n - Configuration of S4HANA customizing and Fiori applications. \n - Configuration and administration of SAP Fiori Launchpad (SCP) \n - Configuration of Cloud Connector, Cloud and ERP for Identity propagation."
    }
  ]

  constructor() { }


  ngOnInit(): void {
  }

}
