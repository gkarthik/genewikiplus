/**
 * @author gkarthik
 */

$(document).ready(function(){
var global_vis;	
	$("#network_view").live('click',function(){
		$("#export_options").fadeIn();
		$("#networkview").fadeIn();
		$("#tabulardata").css({'display':'none'});
		
	});
	
	$("#tabular_view").live('click',function(){
		$("#export_options").fadeOut();
		$("#networkview").css({'display':'none'});
		$("#tabulardata").fadeIn();
	});
	
	$("#export_options ul li").click(function(){
		if(this.id=="pdf")
		{
			global_vis.exportNetwork('pdf', 'export.php?type=pdf');
		}
		else if(this.id=="png")
		{
			global_vis.exportNetwork('png', 'export.php?type=png');
		}
		else if(this.id=="txt")
		{
			global_vis.exportNetwork('txt', 'export.php?type=txt');
		}
		else if(this.id=="svg")
		{
			global_vis.exportNetwork('svg', 'export.php?type=svg');
		}
	});
	$("#close").click(function(){
		$(this).parent().fadeOut();
		$("#overlay").fadeOut();
	});
	
	$("#main li").click(function()
	{
			if(this.id=="gene")
		{
		$("#litebox").fadeIn();
		$("#overlay").fadeIn();
		$("#query_title").html("Gene-SNP-Disease");
		$("#query_text").attr('placeholder',"Enter Gene");
		}
		if(this.id=="snp")
		{
			$("#litebox").fadeIn();
		$("#overlay").fadeIn();
		$("#query_title").html("SNP-Gene-Disease");
		$("#query_text").attr('placeholder',"Enter SNP");
		}
				if(this.id=="disease")
		{
			$("#litebox").fadeIn();
		$("#overlay").fadeIn();
		$("#query_title").html("Disease-Gene-SNP");
		$("#query_text").attr('placeholder',"Enter Disease");
		}
		if(this.id=="gene_disease")
		{
			$("#litebox").fadeIn();
		$("#overlay").fadeIn();
		$("#query_title").html("Gene-Disease");
		$("#query_text").attr('placeholder',"Enter Gene");
		}
	});
	
	$("#query_button").click(function(){
		
		if($("#query_title").html()=="SNP-Gene-Disease")
		{
			generate_snp($("#query_text").val());
			$("#view_choose").fadeIn();
			$("#export_options").fadeIn();
			$("#overlay").fadeOut();
			$("#litebox").fadeOut();
			$("#query_text").val("");
		}
		if($("#query_title").html()=="Gene-SNP-Disease")
		{
			generate_gene($("#query_text").val());
			$("#view_choose").fadeIn();
			$("#export_options").fadeIn();
			$("#overlay").fadeOut();
			$("#litebox").fadeOut();
			$("#query_text").val("");
		}
		
		if($("#query_title").html()=="Disease-Gene-SNP")
		{
			generate_disease($("#query_text").val());
			$("#view_choose").fadeIn();
			$("#export_options").fadeIn();
			$("#overlay").fadeOut();
			$("#litebox").fadeOut();
			$("#query_text").val("");
		}
		
		if($("#query_title").html()=="Gene-Disease")
		{
			generate_gene_disease($("#query_text").val());
			$("#view_choose").fadeIn();
			$("#export_options").fadeIn();
			$("#overlay").fadeOut();
			$("#litebox").fadeOut();
			$("#query_text").val("");
		}
	});
	function generate_gene_disease(gene_disease_query)
	{
		$("#networkview").html("Loading...");
	$.getJSON("http://genewikiplus.org/api.php?action=ask&q=[["+gene_disease_query+"]]&po=is_associated_with_disease&format=json&callback=?", function(data) {
		draw_gene_disease_network(data);
		table_gene_disease(data);
	});	
	}
	
	function table_gene_disease(data)
	{
		 var grid;
  var columns = [
    {id:"rowno",name:"No",field:"rowno"},
    {id: "title", name: "Title", field: "title", width: 200},
    {id: "disease", name: "Disease", field: "disease", width: 200},
  ];

  var options = {
    enableCellNavigation: true,
    enableColumnReorder: false
  };

    var data_for_grid = [];
    var counter=0;
    for (var temp in data["ask"]["results"]["items"][0]["properties"]["is_associated_with_disease"]) 
    {
      data_for_grid[counter] = {rowno:(counter+1),title: data["ask"]["results"]["items"][0]["title"]["mTextform"],disease: data["ask"]["results"]["items"][0]["properties"]["is_associated_with_disease"][temp]};
      counter++;
    }
    grid = new Slick.Grid("#tabulardata", data_for_grid, columns, options);
  }
	
	function draw_gene_disease_network(data)
	{
			var div_id = "networkview";
                var network_json = {
                        dataSchema: {
                    		nodes: [ { name: "label", type: "string" }                   		      
           		         	],
							edges: [ { name: "label", type: "string" }						         
							]
                    	},
                        data: {
                            nodes: [ { id: "1", label: "1" },
                                     { id: "2", label: "2" }
                            ],
                            edges: [ { id: "2to1", target: "1", source: "2", label: "2 to 1" }
                            ]
                        }
                };
                
                var visual_style = {
                    global: {
                        backgroundColor: "#ABCFD6"
                    },
                    nodes: {
                        shape: "RECTANGLE",
                        borderWidth: 3,
                        borderColor: "#ffffff",
                        size: "auto"
                       }
                     };
  
                network_json["data"]["nodes"]=[];
                network_json["data"]["edges"]=[];
                var counter=1;
                var edgecounter=1;
         
                network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["query"]["q"]});
                counter++;
                var secondary_centre;
                secondary_centre=counter-1;
                
                if(data["ask"]["results"]["items"][0]["properties"]["is_associated_with_disease"] instanceof Array)
					{
					
	            	for(var temp_disease in data["ask"]["results"]["items"][0]["properties"]["is_associated_with_disease"])
                	{
                	network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][0]["properties"]["is_associated_with_disease"][temp_disease]});
                	network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:String(secondary_centre)});
                	edgecounter++;
                	counter++;	
                	}
					}
					else
					{
	            	network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][0]["properties"]["is_associated_with_disease"]});
                	network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:String(secondary_centre)});
                	edgecounter++;
                	counter++;	
    
					}
                	
                
                     var layout = {
  								  name:    "Radial",
    							  options: { radius:"150" }
									};              
                var options = {
                    swfPath: "swf/CytoscapeWeb",
                    flashInstallerPath: "swf/playerProductInstall"
                };
                
                var vis = new org.cytoscapeweb.Visualization(div_id, options);
                global_vis=vis;
                vis.draw({ network: network_json, visualStyle: visual_style, layout:layout });	
	}
function generate_disease(disease_query)
	{
		$("#networkview").html("Loading...");
	$.getJSON("http://genewikiplus.org/api.php?action=ask&q=[[Category:Human_proteins]][[is_associated_with::"+disease_query+"]]&po=HasSNP&format=json&callback=?", function(data) {
		draw_disease_network(data);
		table_disease(data);
	});	
	}
	
	function table_disease(data)
	{
				 var grid;
  var columns = [
    {id:"rowno",name:"No",field:"rowno"},
    {id: "gene", name: "Genes", field: "gene", width: 200},
    {id: "snp", name: "SNP", field: "snp", width: 200},
  ];

  var options = {
    editable: true,
  enableAddRow: true,
  enableCellNavigation: true,
  asyncEditorLoading: true,
  forceFitColumns: false,
  topPanelHeight: 25
  };

    var data_for_grid = [];
    var counter=0;
    for (var temp in data["ask"]["results"]["items"]) 
    {
    	if(data["ask"]["results"]["items"][temp]["properties"]["hassnp"] instanceof Array)
    	{
    		var SNP_data="";
for(var temp2 in data["ask"]["results"]["items"][temp]["properties"]["hassnp"])
     {
     	SNP_data+=data["ask"]["results"]["items"][temp]["properties"]["hassnp"][temp2]+'\n';
     }    		
    	}
    	else
    	{
    		SNP_data=data["ask"]["results"]["items"][temp]["properties"]["hassnp"];
    	}
     
      data_for_grid[counter] = {rowno:(counter+1),gene: data["ask"]["results"]["items"][temp]["title"]["mTextform"],snp:SNP_data};
      counter++;
    }
    grid = new Slick.Grid("#tabulardata", data_for_grid, columns, options);
	}
	
	function draw_disease_network(data)
	{
		var div_id = "networkview";
                var network_json = {
                        dataSchema: {
                    		nodes: [ { name: "label", type: "string" }                   		      
           		         	],
							edges: [ { name: "label", type: "string" }						         
							]
                    	},
                        data: {
                            nodes: [ { id: "1", label: "1" },
                                     { id: "2", label: "2" }
                            ],
                            edges: [ { id: "2to1", target: "1", source: "2", label: "2 to 1" }
                            ]
                        }
                };
                
                var visual_style = {
                    global: {
                        backgroundColor: "#ABCFD6"
                    },
                    nodes: {
                        shape: "RECTANGLE",
                        borderWidth: 3,
                        borderColor: "#ffffff",
                        size: "auto"
                       }
                     };
  
                network_json["data"]["nodes"]=[];
                network_json["data"]["edges"]=[];
                var counter=1;
                var edgecounter=1;
         
                network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["query"]["q"]});
                counter++;
                var secondary_centre;
                for(var temp in data["ask"]["results"]["items"])
                {
                	network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][temp]["title"]["mTextform"]});
                	secondary_centre=counter;
                	network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:"1"});
                	edgecounter++;
					counter++;
					if(data["ask"]["results"]["items"][temp]["properties"]["hassnp"] instanceof Array)
					{
	
	            	for(var temp_disease in data["ask"]["results"]["items"][temp]["properties"]["hassnp"])
                	{
                	network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][temp]["properties"]["hassnp"][temp_disease]});
                	network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:String(secondary_centre)});
                	edgecounter++;
                	counter++;	
                	}
					}
					else
					{
	            	network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][temp]["properties"]["hassnp"]});
                	network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:String(secondary_centre)});
                	edgecounter++;
                	counter++;	
    
					}
                	
                }
                     var layout = {
  								  name:    "Tree",
    							  options: { orientation:"leftToRight",depthSpace:1000 }
									};              
                var options = {
                    swfPath: "swf/CytoscapeWeb",
                    flashInstallerPath: "swf/playerProductInstall"
                };
                
                var vis = new org.cytoscapeweb.Visualization(div_id, options);
                global_vis=vis;
                vis.draw({ network: network_json, visualStyle: visual_style, layout:layout });	
		
	}	
	function generate_gene(gene_query)
	{
		$("#networkview").html("Loading...");
	$.getJSON("http://genewikiplus.org/api.php?action=ask&q=[[in_gene::"+gene_query+"]]&po=is+associated+with+disease&format=json&callback=?", function(data) {
		draw_gene_network(data);
		table_gene(data);
	});	
	}
	
	function table_gene(data)
	{
		var grid;
  var columns = [
    {id:"rowno",name:"No",field:"rowno"},
    {id: "gene", name: "SNP", field: "gene", width: 200},
    {id: "snp", name: "Disease", field: "snp", width: 200},
  ];

  var options = {
    editable: true,
  enableAddRow: true,
  enableCellNavigation: true,
  asyncEditorLoading: true,
  forceFitColumns: false,
  topPanelHeight: 25
  };

    var data_for_grid = [];
    var counter=0;
    for (var temp in data["ask"]["results"]["items"]) 
    {
    	if(data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"] instanceof Array)
    	{
    		var SNP_data="";
for(var temp2 in data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"])
     {
     	SNP_data+=data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"][temp2]+'\n';
     }    		
    	}
    	else
    	{
    		SNP_data=data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"];
    	}
     
      data_for_grid[counter] = {rowno:(counter+1),gene: data["ask"]["results"]["items"][temp]["title"]["mTextform"],snp:SNP_data};
      counter++;
    }
    grid = new Slick.Grid("#tabulardata", data_for_grid, columns, options);

	}
	
	
	
	function draw_gene_network(data)
	{
		var div_id = "networkview";
                var network_json = {
                        dataSchema: {
                    		nodes: [ { name: "label", type: "string" }                   		      
           		         	],
							edges: [ { name: "label", type: "string" }						         
							]
                    	},
                        data: {
                            nodes: [ { id: "1", label: "1" },
                                     { id: "2", label: "2" }
                            ],
                            edges: [ { id: "2to1", target: "1", source: "2", label: "2 to 1" }
                            ]
                        }
                };
                
                var visual_style = {
                    global: {
                        backgroundColor: "#ABCFD6"
                    },
                    nodes: {
                        shape: "RECTANGLE",
                        borderWidth: 3,
                        borderColor: "#ffffff",
                        size: "auto"
                       }
                     };
  
                network_json["data"]["nodes"]=[];
                network_json["data"]["edges"]=[];
                var counter=1;
                var edgecounter=1;
         
                network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["query"]["q"]});
                counter++;
                var secondary_centre;
                for(var temp in data["ask"]["results"]["items"])
                {
                	network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][temp]["title"]["mTextform"]});
                	secondary_centre=counter;
                	network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:"1"});
                	edgecounter++;
					counter++;
					if(data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"] instanceof Array)
					{
	
	            	for(var temp_disease in data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"])
                	{
                	network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"][temp_disease]});
                	network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:String(secondary_centre)});
                	edgecounter++;
                	counter++;	
                	}
					}
					else
					{
	            	network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"]});
                	network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:String(secondary_centre)});
                	edgecounter++;
                	counter++;	
    
					}
                	
                }
                     var layout = {
  								  name:    "Tree",
    							  options: { orientation:"leftToRight",depthSpace:100 }
									};              
                var options = {
                    swfPath: "swf/CytoscapeWeb",
                    flashInstallerPath: "swf/playerProductInstall"
                };
                
                var vis = new org.cytoscapeweb.Visualization(div_id, options);
                global_vis=vis;
                vis.draw({ network: network_json, visualStyle: visual_style, layout:layout });	
		
	}
	
	function generate_snp(snp_query)
	{
		$("#networkview").html("Loading...");
	$.getJSON("http://genewikiplus.org/api.php?action=ask&q=[[HasSNP::"+snp_query+"]]&po=Is+associated+with+disease&format=json&callback=?", function(data) {
		draw_snp_network(data);
		table_snp(data);
	});	
	}
	
	function table_snp(data)
	{
		var grid;
  var columns = [
    {id:"rowno",name:"No",field:"rowno"},
    {id: "gene", name: "SNP", field: "gene", width: 200},
    {id: "snp", name: "Disease", field: "snp", width: 200},
  ];

  var options = {
    editable: true,
  enableAddRow: true,
  enableCellNavigation: true,
  asyncEditorLoading: true,
  forceFitColumns: false,
  topPanelHeight: 25
  };

    var data_for_grid = [];
    var counter=0;
    var temp=0;
    	if(data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"] instanceof Array)
    	{
    		var SNP_data="";
for(var temp2 in data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"])
     {
     	SNP_data+=data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"][temp2]+'\n';
     }    		
    	}
    	else
    	{
    		SNP_data=data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"];
    	}
     
      data_for_grid[counter] = {rowno:(counter+1),gene: data["ask"]["results"]["items"][temp]["title"]["mTextform"],snp:SNP_data};
      counter++;
    
    grid = new Slick.Grid("#tabulardata", data_for_grid, columns, options);

	}
	
	function draw_snp_network(data)
	{
		
				var div_id = "networkview";
                var network_json = {
                        dataSchema: {
                    		nodes: [ { name: "label", type: "string" }                   		      
           		         	],
							edges: [ { name: "label", type: "string" }						         
							]
                    	},
                        data: {
                            nodes: [ { id: "1", label: "1" },
                                     { id: "2", label: "2" }
                            ],
                            edges: [ { id: "2to1", target: "1", source: "2", label: "2 to 1" }
                            ]
                        }
                };
                
                var visual_style = {
                    global: {
                        backgroundColor: "#ABCFD6"
                    },
                    nodes: {
                        shape: "RECTANGLE",
                        borderWidth: 3,
                        borderColor: "#ffffff",
                        size: "auto"
                       }
                     };
  
                network_json["data"]["nodes"]=[];
                network_json["data"]["edges"]=[];
                var counter=1;
                var edgecounter=1;
         
                network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][0]["title"]["mTextform"]+"\n"+data["ask"]["query"]["q"]});
                counter++;
                
                for(var temp in data["ask"]["results"]["items"])
                {
                	for(var temp_disease in data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"])
                	{
                	network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"][temp_disease]});
                	network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:"1"});
                	edgecounter++;
                	counter++;	
                	}
                	
                }
                     var layout = {
  								  name:    "Radial",
    							  options: { radius: 80 }
									};              
                var options = {
                    swfPath: "swf/CytoscapeWeb",
                    flashInstallerPath: "swf/playerProductInstall"
                };
                
                var vis = new org.cytoscapeweb.Visualization(div_id, options);
                global_vis=vis;
                vis.draw({ network: network_json, visualStyle: visual_style, layout:layout });	
	}
	            
});
