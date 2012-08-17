#Description

This is a project to visualize networks out of gene,disease and snp data obtained from semantic queries executed on the database at Gene Wiki+.
Once a gene term is supplied, data from Gene Wiki Plus is retrieved and a Gene->Root_disease_term->SNP->Disease network is generated. For further convenience and utility, filter options are provided to enable the user to browse through the net at their own convenience. For further reference, export options into png,pdf,svg and txt are provided.

Browsing the network itself is broken down into two steps.

1. The network initially contains parent roots of all the diseases involved.
2. On click of a root node, the related diseases with the related SNPs are shown.

Data arranged in a tabular form is also shown for reference purposes. 
#Libraries Used
We are currently getting data from gene wiki+ by employing JSONp and cross domain ajax requests. jQuery(http://jquery.com/), the popular javascript framework is being sued to retrieve data as well as to manipulate DOM elements.
The network is being generated by using CytoscapeWeb(http://cytoscapeweb.cytoscape.org/) which bring the power of Cytoscape to the Web. It is a flash object which can be manipulated via Javascript.
The tables are generated by using Slick Grid(https://github.com/mleibman/SlickGrid/), a javascript spreadsheet/table component.




