#Home

<http://gkarthik.net/csb/genewikiplus/index2.php>

#Description

This is a project to visualize networks out of gene,disease and snp data obtained from semantic queries executed on the database at Gene Wiki+.
Once a gene term is supplied, data from Gene Wiki Plus is retrieved and a Gene->Root_disease_term->SNP->Disease network is generated. For further convenience and utility, filter options are provided to enable the user to browse through the net at their own convenience. 

An auto complete feature exists to help in choosing the relevant gene. The auto complete is supported by the REST services at <http://mygene.info>. The autocomplete drop down is also supported by keyboard controls.

Browsing the network itself is broken down into two steps.

1. The network initially contains parent roots of all the diseases involved.
2. On click of a root node, the related diseases with the related SNPs are shown.

Data is also arranged in a tabular form is also shown for reference purposes. 

Further more there are filter options with options to display only selected nodes in the network and from there on export them into any desired format.

#Keyboard support

The interface includes some keyboard navigation:

Up - Moving up the autocomplete options.

Down - Moving down the autocomplete options.

Enter - The highlighted autocomplete option is queried upon. If no option is highlighted, the value in the text box is queried upon.

Escape - Closes the autocomplete drop down.

#Network Options

Pan - Moving around the network by click and drag

Zoom - By default the network zooms in and out to fit the current nodes on display. But further zooming can be done by clicking on the '+' and the '-' keys. And the double arrow key can be clciked to fit the network perfectly into the box.

Export Options - Also the network on display at any point can be exported into .png, .pdf, .svg and .txt formats by clicking on the export options above the network.

Hover tooltip - On hovering over a node, a tooltip appears which on clicked will show the data about that node in a textual format with back links to Gene Wiki Plus.

#Libraries Used
We are currently getting data from gene wiki+ by employing JSONp and cross domain ajax requests. jQuery(<http://jquery.com/>), the popular javascript framework is being sued to retrieve data as well as to manipulate DOM elements.

The network is being generated by using CytoscapeWeb(<http://cytoscapeweb.cytoscape.org/>) which bring the power of Cytoscape to the Web. It is a flash object which can be manipulated via Javascript.

The tables are generated by using Slick Grid(<https://github.com/mleibman/SlickGrid/>), a javascript spreadsheet/table component.

#Screenshots

Auto Complete from <http://mygene.info/> 

![Alt text](http://gkarthik.net/csb/genewikiplus/readme_images/dropdown.jpg "Auto Complete") 

Network loaded with export options

![Alt text](http://gkarthik.net/csb/genewikiplus/readme_images/loaded_network.jpg "Loaded network")

Network load with only parent nodes

![Alt text](http://gkarthik.net/csb/genewikiplus/readme_images/loadenetwork1.jpg "Loaded network with parent nodes")

Network after one click on all parent nodes

![Alt text](http://gkarthik.net/csb/genewikiplus/readme_images/loadenetwork2.jpg "Loaded network with all nodes")

Filter Options

![Alt text](http://gkarthik.net/csb/genewikiplus/readme_images/loaded_network_filter.jpg "Loaded network with filter options")

Tabular data

![Alt text](http://gkarthik.net/csb/genewikiplus/readme_images/tabular.jpg "Tabular data")