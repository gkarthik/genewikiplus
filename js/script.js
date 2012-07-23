/**
 * @author gkarthik
 */
// Global variables to store the CytoscapeWeb interface. Implemented for export functions.
var global_vis;
var global_vis2;	

$(document).ready(function(){
global_vis=null;
global_vis2=null;
//Menu functionality.
	$("#network_view").live('click',function(){
		$("#export_options").fadeIn();
		$("#networkview").fadeIn();
		$("#tabulardata").css({'display':'none'});
		$("#networkview2").css({'display':'none'});
	});
	
	$("#tabular_view").live('click',function(){
		$("#export_options").fadeOut();
		$("#networkview").css({'display':'none'});
		$("#networkview2").css({'display':'none'});
		$("#tabulardata").fadeIn();
	});
	
	$("#gene_disease_network_display").live('click',function(){
		$("#export_options").fadeIn();
		$("#networkview").css({'display':'none'});
		$("#tabulardata").css({'display':'none'});
		$("#networkview2").fadeIn();
	})
	
	// Export Functionality
	$("#export_options ul li").click(function(){
		export_options(this.id);
		});
		$("#omni_submit").click(function(){
		$("#networkview").html("Loading...");
		$("#networkview2").html("");
		$("#networkview2").css({'display':'none'});
		$("#view_choose_list").html('<li id="network_view">Network</li><li id="tabular_view">Tabular</li>');
	//To obtain category of Query term to generate relevant network
	$.getJSON("http://genewikiplus.org/api.php?action=ask&q=[["+$("#omni_query").val()+"]]&format=json&callback=?", function(data) {
		find_category($("#omni_query").val(),data);
	});
	});
});	
	
	
	function export_options(id)
	{
		if($("#networkview").css('display')=="block")
		{
		if(id=="pdf")
		{
			global_vis.exportNetwork('pdf', 'export.php?type=pdf');
		}
		else if(id=="png")
		{
			global_vis.exportNetwork('png', 'export.php?type=png');
		}
		else if(id=="txt")
		{
			global_vis.exportNetwork('txt', 'export.php?type=txt');
		}
		else if(id=="svg")
		{
			global_vis.exportNetwork('svg', 'export.php?type=svg');
		}	
		}
		else//Export for Gene->Disease network that comes along with Gene->SNP->Disease netowrk
		{
			if(id=="pdf")
		{
			global_vis2.exportNetwork('pdf', 'export.php?type=pdf');
		}
		else if(id=="png")
		{
			global_vis2.exportNetwork('png', 'export.php?type=png');
		}
		else if(id=="txt")
		{
			global_vis2.exportNetwork('txt', 'export.php?type=txt');
		}
		else if(id=="svg")
		{
			global_vis2.exportNetwork('svg', 'export.php?type=svg');
		}
		}
	}
	
	function generate_gene_disease(gene_disease_query)//To generate Gene->Disease query
	{
	$.getJSON("http://genewikiplus.org/api.php?action=ask&q=[["+gene_disease_query+"]]&po=is_associated_with_disease&format=json&callback=?", function(data) {
		draw_gene_disease_network(data);
		table_gene_disease(data);
	});	
	}
	
	function table_gene_disease(data)//To generate table for gene->disease data 
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
		//CytocapeWeb variables and styling
			var div_id = "networkview2";
                var network_json = {
                        dataSchema: {
                    		nodes: [ { name: "label", type: "string" },
                    		{ name: "type", type: "string" },{ name: "category", type: "string" },{ name: "weight", type: "integer" }                   		      
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
                var colorMapper = {attrName: "type",
        						   entries: [ { attrValue: "q", value: "#ff0000" },
                   							  { attrValue: "disease", value: "#00ff00" },
                   							  { attrValue: "category_group", value: "yellow" } ]
								  };
				
                var visual_style = {
                    global: {
                        backgroundColor: "#ABCFD6"
                    },
                    nodes: {
                        	color:{discreteMapper: colorMapper},
                        shape: { customMapper: { functionName: "customShape" }},
                        borderWidth: 3,
                        borderColor: "#ffffff",
                        labelFontSize : { customMapper: { functionName: "customSize" } },
                        size:"auto"
                       }
                     };
  
                network_json["data"]["nodes"]=[];
                network_json["data"]["edges"]=[];
                var counter=1;
                var edgecounter=1;
         //Central node
                network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["query"]["q"].replace("[[","").replace("]]",""),type:"q"});
                counter++;
                var secondary_centre;
                secondary_centre=counter-1;
         //Pushing disease data into disease nodes       
                if(data["ask"]["results"]["items"][0]["properties"]["is_associated_with_disease"] instanceof Array)
					{
					
	            	for(var temp_disease in data["ask"]["results"]["items"][0]["properties"]["is_associated_with_disease"])
                	{
                	network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][0]["properties"]["is_associated_with_disease"][temp_disease],type:"disease"});
                	network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:String(secondary_centre)});
                	edgecounter++;
                	counter++;	
                	}
					}
					else
					{
	            	network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][0]["properties"]["is_associated_with_disease"],type:"disease"});
                	network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:String(secondary_centre)});
                	edgecounter++;
                	counter++;	
    
					}
                	
                //Cytocape Web variables and styling
                     var layout = {
  								  name:    "Radial",
    							  options: { radius:"150" }
									};              
                var options = {
                    swfPath: "swf/CytoscapeWeb",
                    flashInstallerPath: "swf/playerProductInstall"
                };
                //Deleting duplicate nodes
                 var counter_per_node=0;
                var counter_for_deletion=0;
                var repeated_node="";
                var unique_node="";
                for(var temp_node in network_json["data"]["nodes"])
                {
                	counter_per_node=0;
                	for(var temp_node2 in network_json["data"]["nodes"])
                	{
                		
                		if(network_json["data"]["nodes"][temp_node]["label"]==network_json["data"]["nodes"][temp_node2]["label"])
                		{
                			counter_per_node++;
                		}
                	}
                	counter_for_deletion=0;
                	
                	if(counter_per_node>1)
                	{
                		
                		repeated_node=network_json["data"]["nodes"][temp_node]["id"];
                		
                		for(var delete_temp in network_json["data"]["nodes"])
                		{
                			
                			if(typeof network_json["data"]["nodes"][delete_temp]["id"] === "undefined")
                			{
                				
                			}	
                			else
                			{                			
                			if(network_json["data"]["nodes"][delete_temp]["label"]==network_json["data"]["nodes"][temp_node]["label"])
                			{
                			counter_for_deletion++;	                			
                			if(counter_for_deletion>1)
                			{
                				//delete [delete_temp]["label"]="To be deleted";
                				for(var delete_edge in network_json["data"]["edges"])
                				{            					
                					if(network_json["data"]["nodes"][delete_temp]["id"]==network_json["data"]["edges"][delete_edge]["target"])
                					{
                						network_json["data"]["edges"][delete_edge]["target"]=repeated_node;
                					}
                				}
                				network_json["data"]["nodes"].splice(delete_temp, 1);	                				
                			}
                			
                			}
                			}	
                		}
                		
                	}
                	
                }
                //Obtaining category data for each disease
                $("#networkview2").html("Loading Disease category data...");
                var all_categories_array=[];
                var ajax_nodeids=new Array;
                var ajax_nodelabels=new Array;
                var ajax_nodelabels_count=0;
                var ajax_nodecount=-1;
                var disease_count=0;
                var data_storage=[];
                var data_storage_count=-1;
                inner_label_count=0;
                for(var temp in network_json["data"]["nodes"])
                {
                	if(network_json["data"]["nodes"][temp]["type"]=="disease")
                	{
                		disease_count++;
                	}
                }
                //Loop to obtain category data for each disease. Data retrieved is stored in a dictionary, data_storage to avoid problems caused by asynchronous code
                for(var temp in network_json["data"]["nodes"])
                {
                	
                	if(network_json["data"]["nodes"][temp]["type"]=="disease")
                	{
                		ajax_nodeids.push(network_json["data"]["nodes"][temp]["id"]);
                		ajax_nodelabels.push(network_json["data"]["nodes"][temp]["label"]);
                		ajax_nodelabels_count++;
                		$.getJSON("http://genewikiplus.org/api.php?action=query&titles="+ajax_nodelabels[ajax_nodelabels_count-1].replace(" ","+")+"&prop=categories&format=json&callback=?", function(data) {
							data_storage.push(data);
									ajax_nodecount++;
									data_storage_count++;							
							if(ajax_nodecount==disease_count-1)
							{								
								group_nodecategories();// Function to be called at the completion of the dictionary in dta_storage.
							}
						});
                	}
                }
                var group_category=[];
                //Arranging data into a new dictionary variable all_categories_array according to disease cateogory    
                function group_nodecategories()
                {
                		for(var temp_nj in network_json["data"]["nodes"])
                		{
                			for(var data_storage_count in data_storage)
                			{
									for(var temp3 in data_storage[data_storage_count]["query"]["pages"])
									{
										if(data_storage[data_storage_count]["query"]["pages"][temp3]["title"]==network_json["data"]["nodes"][temp_nj]["label"])
										{
											for(var temp2 in data_storage[data_storage_count]["query"]["pages"][temp3]["categories"])
											{
												if((data_storage[data_storage_count]["query"]["pages"][temp3]["categories"][temp2]["title"].indexOf("articles")==-1)&&(data_storage[data_storage_count]["query"]["pages"][temp3]["categories"][temp2]["title"].indexOf("Articles")==-1)&&(data_storage[data_storage_count]["query"]["pages"][temp3]["categories"][temp2]["title"].indexOf("Wikipedia")==-1)&&(data_storage[data_storage_count]["query"]["pages"][temp3]["categories"][temp2]["title"].indexOf("Pages")==-1)&&(data_storage[data_storage_count]["query"]["pages"][temp3]["categories"][temp2]["title"].indexOf("pages")==-1)&&(data_storage[data_storage_count]["query"]["pages"][temp3]["categories"][temp2]["title"].indexOf("2010")==-1)/*&&(data_storage[data_storage_count]["query"]["pages"][temp3]["categories"][temp2]["title"].indexOf("Greek")==-1)*/)
												{
													all_categories_array.push({"category":data_storage[data_storage_count]["query"]["pages"][temp3]["categories"][temp2]["title"],"node_disease_id":network_json["data"]["nodes"][temp_nj]["id"],"node_disease_label":network_json["data"]["nodes"][temp_nj]["label"]});
												}
											}
										}			
									}
                				
                			}
                		
              			}
				//Generating a dictionary variable group_category with diseases with common categories under the same element
                var groupno=0;
                var group_flag=0;
                var group_category_index=0;
                for(var temp in all_categories_array)
                {
                	group_flag=0;
                	count_check=0;
                	for(var group_temp in group_category)
                	{
                		if(group_category[group_temp]["group_category"]==all_categories_array[temp]["category"])
                		{
                			group_flag=1;
                			group_category_index=group_temp;
                		}
                	}
                		
                	if(group_flag==0)
                	{
                	group_category.push({"group_no":groupno,"group_category":all_categories_array[temp]["category"],"ids":[]});
                	groupno++;
                	
                	for(var temp2 in all_categories_array)
					{
						if((all_categories_array[temp2]["category"]==group_category[group_category.length-1]["group_category"]))
						{
								group_category[group_category.length-1]["ids"].push(all_categories_array[temp2]["node_disease_id"]);
						}
					}
					}
                }
                // Passing data in dictionary to the web interface and forming new links between common category disease nodes to proceed to visualization
                var to_filter=[];
                var to_remove=[];
                to_filter.push("1");
                var filter_flag=0;
                var count_category=0;
                var link_break=0;
                var filter_flag=0;
                for(var temp_main in network_json["data"]["nodes"])
                {
                	
                	for(var temp in group_category)
                {
                	count_category=0;
                	
                	for(var temp2 in group_category[temp]["ids"])
                	{
                		count_category=group_category[temp]["ids"].length;
                		
                			if(group_category[temp]["ids"][temp2]==network_json["data"]["nodes"][temp_main]["id"])
                			{
                				if(count_category==1)
                				{
                				network_json["data"]["nodes"][temp_main]["label"]+="\n"+group_category[temp]["group_category"];
                				filter_flag=0;
                				for(var temp_filter in to_filter)
                				{
                					if(to_filter[temp_filter]==group_category[temp]["ids"][temp2])
                					{
                						filter_flag=1;
                					}
                				}
                				if(filter_flag==0)
                				{
                				to_filter.push(network_json["data"]["nodes"][temp_main]["id"]);	
                				}                				
				 			}
                			else if(count_category>1)
                			{
                				
                				if(temp2==0)
                				{
                				network_json["data"]["nodes"].push({id:String(counter),label:group_category[temp]["group_category"]+"\nDiseases("+count_category+")",type:"category_group",weight:count_category});
                				network_json["data"]["edges"].push({id:String(edgecounter),source:"1",target:String(counter)});
                				to_filter.push(String(counter));                					
                				}
                				link_break=0;
                				for(var temp_edge in network_json["data"]["edges"])
                				{	
                				if((network_json["data"]["edges"][temp_edge]["target"]==network_json["data"]["nodes"][temp_main]["id"])&&(network_json["data"]["edges"][temp_edge]["source"]=="1"))
                				{
                					link_break=1;
                					network_json["data"]["edges"][temp_edge]["source"]=String(counter-temp2);
                					network_json["data"]["edges"][temp_edge]["target"]=network_json["data"]["nodes"][temp_main]["id"];
                				}
                				}
                				if(link_break==0)
                				{
									network_json["data"]["edges"].push({"id":String(edgecounter),"source":String(counter-temp2),"target":network_json["data"]["nodes"][temp_main]["id"]});
									edgecounter++;                					
                				}
                				if(temp2==0)
                				{
                					counter++;
                				edgecounter++;
                				}
                				to_remove.push(group_category[temp]["ids"][temp2]);
	
                			}
                		}	
                			
                	}
                }
                }
                for(var temp_filter in to_filter)
                				{
                					for(var temp_remove in to_remove)
                					{
                					if(to_filter[temp_filter]==to_remove[temp_remove])
                					{
                						to_filter.splice(temp_filter,1);
                					}	
                					}
                					
                				}
                				//customizing shape options
                                var vis = new org.cytoscapeweb.Visualization(div_id, options);
                global_vis2=vis;
                 vis["customSize"] = function (data) {
    								   		var size = 11+Math.round(0.8*data["weight"]);
											return size;	
									   };
				vis["customShape"] = function (data) {
    								   if(data["type"]=="disease")
    								   {
    								   	return "ELLIPSE";
    								   }
    								   else if(data["type"]=="group_category")
    								   {
    								   	return "RECTANGLE";
    								   }
    								   else if(data["type"]=="q")
    								   {
    								   	return "HEXAGON";
    								   }
    								   else
    								   {
    								   	return "ROUNDRECT";
    								   }
    								   				
									   };
									   global_vis2=vis;
                vis.draw({ network: network_json, visualStyle: visual_style, layout:layout });	
                vis.ready(function(){
					vis.filter("nodes",to_filter);
					vis.addListener("click", "nodes",function(evt){
                 			var node=evt.target;
                 			if(node.data.type=="category_group")
                 			{
                 			var all_edges=vis.edges();
                 			for(var temp in all_edges)
                 			{
                 				if(all_edges[temp].data.source==node.data.id)
                 				{				
                						to_filter.push(all_edges[temp].data.target);				
                 				}
                 			}
                 			vis.filter("nodes",to_filter);	
                 			}
                 		});
				});
                }
                
                    
	}
function generate_disease(disease_query)
	{
		
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
                
                 var counter_per_node=0;
                var counter_for_deletion=0;
                var repeated_node="";
                var unique_node="";
                for(var temp_node in network_json["data"]["nodes"])
                {
                	counter_per_node=0;
                	for(var temp_node2 in network_json["data"]["nodes"])
                	{
                		
                		if(network_json["data"]["nodes"][temp_node]["label"]==network_json["data"]["nodes"][temp_node2]["label"])
                		{
                			counter_per_node++;
                		}
                	}
                	counter_for_deletion=0;
                	
                	if(counter_per_node>1)
                	{
                		
                		repeated_node=network_json["data"]["nodes"][temp_node]["id"];
                		
                		for(var delete_temp in network_json["data"]["nodes"])
                		{
                			
                			if(typeof network_json["data"]["nodes"][delete_temp]["id"] === "undefined")
                			{
                				
                			}	
                			else
                			{                			
                			if(network_json["data"]["nodes"][delete_temp]["label"]==network_json["data"]["nodes"][temp_node]["label"])
                			{
                			counter_for_deletion++;	                			
                			if(counter_for_deletion>1)
                			{
                				//delete [delete_temp]["label"]="To be deleted";
                				for(var delete_edge in network_json["data"]["edges"])
                				{            					
                					if(network_json["data"]["nodes"][delete_temp]["id"]==network_json["data"]["edges"][delete_edge]["target"])
                					{
                						network_json["data"]["edges"][delete_edge]["target"]=repeated_node;
                					}
                				}
                				network_json["data"]["nodes"].splice(delete_temp, 1);	                				
                			}
                			
                			}
                			}	
                		}
                		
                	}
                	
                }
                
                var vis = new org.cytoscapeweb.Visualization(div_id, options);
                global_vis=vis;
                vis.draw({ network: network_json, visualStyle: visual_style, layout:layout });	
		
	}	
	function generate_gene(gene_query)
	{
		
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
                    		nodes: [ { name: "label", type: "string" }, { name:"type", type:"string"}, { name:"weight", type:"integer"},
                    		{ name:"to_show", type:"integer"}            		      
           		         	],
							edges: [ { name: "label", type: "string" }						         
							]
                    	},
                        data: { }
                };
                var sizeMapper = { attrName: "weight",  minValue: 10, maxValue: 100, minAttrValue:10 };
                var colorMapper = {attrName: "type",
        						   entries: [ { attrValue: "q", value: "#ff0000" },
                   							  { attrValue: "disease", value: "#00ff00" },
                   							  { attrValue: "SNP", value: "yellow" } ]
								  };
				
                var visual_style = {
                    global: {
                        backgroundColor: "#ABCFD6"
                    },
                    nodes: {
                    	color:{discreteMapper: colorMapper},
                        shape: { customMapper: { functionName: "customShape" }},
                        borderWidth: 3,
                        borderColor: "#ffffff",
                        labelFontSize : { customMapper: { functionName: "customSize" } },
                        size:"auto"
                       }
                     };
  
                network_json["data"]["nodes"]=[];
                network_json["data"]["edges"]=[];
                var counter=1;
                var edgecounter=1;
         
                network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["query"]["q"].replace("[[in_gene::","").replace("]]",""),type:"q"});
                counter++;
                var secondary_centre;
                
                if(data["ask"]["results"]==undefined)
                {
                	$("#networkview").html("The Gene supplied doesn't have any associated disease in our database.")
                }
                for(var temp in data["ask"]["results"]["items"])
                {
                	network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][temp]["title"]["mTextform"],type:"SNP"});
                	secondary_centre=counter;
                	network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:"1"});
                	edgecounter++;
					counter++;
					if(data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"] instanceof Array)
					{
	            	for(var temp_disease in data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"])
                	{
                	network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"][temp_disease],type:"disease"});
                	network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:String(secondary_centre)});
                	edgecounter++;
                	counter++;	
                	}
					}
					else
					{
	            	network_json["data"]["nodes"].push({id:String(counter),label:data["ask"]["results"]["items"][temp]["properties"]["is_associated_with_disease"],type:"disease"});
                	network_json["data"]["edges"].push({id:String(edgecounter),target:String(counter),source:String(secondary_centre)});
                	edgecounter++;
                	counter++;	
    
					}
                	
                }
                     var layout = {
  								  name:    "ForceDirected",
  								  options:{mass: 50,gravitation: -10,maxTime: 100000,minDistance: 20,maxDistance:40,autoStabilize :1 }    					
									};              
                var options = {
                    swfPath: "swf/CytoscapeWeb",
                    flashInstallerPath: "swf/playerProductInstall"
                };
                
                
                var counter_per_node=0;
                var counter_for_deletion=0;
                var repeated_node="";
                var unique_node="";
                var source_node_group="";
                var source_node_renamed="";
                var filtered_nodes=new Array;
                var filtered_edges=new Array;
                var reverse_filtered_edges=new Array;
                var reverse_filtered_nodes=new Array;
                var node_to_be_numbered="";
                var number_of_filterednodes=0;
                var single_notfiltered=new Array;
                for(var temp_node in network_json["data"]["nodes"])
                {
                	counter_per_node=0;
                	for(var temp_node2 in network_json["data"]["nodes"])
                	{
                		if(network_json["data"]["nodes"][temp_node]["label"]==network_json["data"]["nodes"][temp_node2]["label"])
                		{
                			counter_per_node++;
                			source_node_renamed=network_json["data"]["nodes"][temp_node]["id"];
                		}
                	}
                	counter_for_deletion=0;
                	
                	if(counter_per_node>1)
                	{
                		
                		repeated_node=network_json["data"]["nodes"][temp_node]["id"];
                		
                		for(var delete_temp in network_json["data"]["nodes"])
                		{
                			
                			if(typeof network_json["data"]["nodes"][delete_temp]["id"] === "undefined")
                			{
                				//
                			}	
                			else
                			{                			
                			if(network_json["data"]["nodes"][delete_temp]["label"]==network_json["data"]["nodes"][temp_node]["label"])
                			{
                			counter_for_deletion++;	  
                			
                			for(var delete_edge1 in network_json["data"]["edges"])
                				{            					
                					if(network_json["data"]["nodes"][delete_temp]["id"]==network_json["data"]["edges"][delete_edge1]["target"])
                					{
                						node_to_be_numbered=network_json["data"]["nodes"][delete_temp]["id"];
                					}
                				}
                			if(counter_for_deletion>1)
                			{                				
                				for(var delete_edge in network_json["data"]["edges"])
                				{            					
                					if(network_json["data"]["nodes"][delete_temp]["id"]==network_json["data"]["edges"][delete_edge]["target"])
                					{
                						network_json["data"]["edges"][delete_edge]["target"]=repeated_node;
                					}                					
                				}
                				
                				network_json["data"]["nodes"].splice(delete_temp, 1);
                			}
                			else
                			{
                				//
                			}
                		
                			
                			
                			}
                			}	
                		}
                		
                	}
                }
                var remember_source="";
                // Loop to remove all SNP s
                for(var temp_node_disease in network_json["data"]["nodes"])
                {
                	if(network_json["data"]["nodes"][temp_node_disease]["type"]=="disease")
                	{
                		remember_source="none";
                		number_of_filterednodes=0;
                		for(var temp_node_filtered in network_json["data"]["edges"])
                		{
                			if(network_json["data"]["edges"][temp_node_filtered]["target"]==network_json["data"]["nodes"][temp_node_disease]["id"])
                			{
                				if(number_of_filterednodes>1)
                				{
                					remember_source="none";
                					
                				}
                				else if(number_of_filterednodes==0)
                				{
                					remember_source=network_json["data"]["edges"][temp_node_filtered]["source"];
                				}
                				filtered_nodes.push(network_json["data"]["edges"][temp_node_filtered]["source"]);
                				number_of_filterednodes++;
                			}
                		}
                		if(number_of_filterednodes>1)
                		{
                			network_json["data"]["nodes"].push({id:String(counter),label:"SNP("+number_of_filterednodes+")",to_show:1,type:"SNPcount"+network_json["data"]["nodes"][temp_node_disease]["id"],weight:number_of_filterednodes});
                			network_json["data"]["nodes"][temp_node_disease]["weight"]=number_of_filterednodes;
	                		network_json["data"]["edges"].push({id:String(edgecounter),source:"1",target:String(counter)});
	                		edgecounter++;
    	            		network_json["data"]["edges"].push({id:String(edgecounter),source:String(counter),target:network_json["data"]["nodes"][temp_node_disease]["id"]});	
                		}
                		else if(number_of_filterednodes==1)
                		{                			
                			single_notfiltered.push(remember_source);
                		}
        				edgecounter++;
                		counter++;
                	}
                }
                
                  var vis = new org.cytoscapeweb.Visualization(div_id, options); 
                  vis["customSize"] = function (data) {
    								   		var size = 11+Math.round(0.8*data["weight"]);
											return size;	
									   };
				vis["customShape"] = function (data) {
    								   if(data["type"]=="disease")
    								   {
    								   	return "ELLIPSE";
    								   }
    								   else if(data["type"]=="SNP")
    								   {
    								   	return "RECTANGLE";
    								   }
    								   else if(data["type"]=="q")
    								   {
    								   	return "HEXAGON";
    								   }
    								   else
    								   {
    								   	return "ROUNDRECT";
    								   }
    								   				
									   };
									   
                global_vis=vis;
                vis.draw({ network: network_json, visualStyle: visual_style, layout:layout });
                vis.ready(function() {
                 	var to_select_edges=new Array;
                 		var to_select_node=new Array;
                 		var dblclicked_id="none";
                 		vis.addListener("mouseover", "edges",function(evt){
                 			var edge=evt.target;
                 			//alert(edge.data.source+" "+edge.data.target+" "+edge.data.id);
                 		});
                 		var to_filterout_nodes=new Array;
                 		vis.addListener("dblclick","nodes",function(evt){
                 			var node=evt.target;
                 			if(dblclicked_id=="none")
                 			{
                 			
                 			var all_edges=vis.edges();
                 			to_filterout_nodes=[];
                 			dblclicked_id=node.data.id;
                 			to_filterout_nodes.push(node.data.id);
                 		for(var temp in all_edges)
                 		{
                 			if(all_edges[temp].data.source==node.data.id)
                 			{
                 				
                 				to_filterout_nodes.push(all_edges[temp].data.target);
                 			}
                 			if(all_edges[temp].data.target==node.data.id)
                 			{
                 				
                 				to_filterout_nodes.push(all_edges[temp].data.source);
                 			}
                 		}
                 		vis.filter("nodes",to_filterout_nodes);
                 		}
                 		else if(dblclicked_id==node.data.id)
                 		{
                 			render_filter(filtered_nodes);
                 			dblclicked_id="none";
                 		}
                 		});
                 	vis.addListener("mouseover", "nodes", function(evt){
                 		to_select_edges=[];
                 		to_select_nodes=[];
                 		var node=evt.target;
                 		var html="";
                 		//to_select_nodes.push(node.data.id);
                 		if(node.data.type=="disease")
                 		{
                 			html="<a href='http://genewikiplus.org/index.php?title="+node.data.label+"' target='_blank'>"+node.data.label+"</a> is related to the following SNps:<br />";
                 		}
                 		else if(node.data.type=="SNP")
                 		{
                 			html="<a href='http://genewikiplus.org/index.php?title="+node.data.label+"' target='_blank'>"+node.data.label+"</a> is related to the following diseases:<br />";
                 		}
                 		else if(node.data.type=="q")
                 		{
                 			html="In <a href='http://genewikiplus.org/index.php?title="+node.data.label+"' target='_blank'>"+node.data.label+"</a> the following SNPs are present<br />";
                 		}
                 		else
                 		{
                 			html="<a href='http://genewikiplus.org/index.php?title="+node.data.label.replace("SNP(","").replace(")","")+"' target='_blank'>"+node.data.label.replace("SNP(","").replace(")","")+"</a> SNPs in the gene are related to the following diseases:<br />";
                 		}
                 		
                 		var all_edges=vis.edges();
                 		for(var temp in all_edges)
                 		{
                 			
                 			if(all_edges[temp].data.source==node.data.id)
                 			{
                 				to_select_edges.push(all_edges[temp].data.id);
                 				to_select_nodes.push(all_edges[temp].data.target);
                 				if((vis.node(all_edges[temp].data.target).data.type!="q")&&(vis.node(all_edges[temp].data.target).data.to_show!=1))
                 				{
                 				html+="<a href='http://genewikiplus.org/index.php?title="+vis.node(all_edges[temp].data.target).data.label+"' target='_blank'>"+vis.node(all_edges[temp].data.target).data.label+"</a><br />";	
                 				}
                 				
                 			}
                 			if(all_edges[temp].data.target==node.data.id)
                 			{
                 				to_select_edges.push(all_edges[temp].data.id);
                 				to_select_nodes.push(all_edges[temp].data.source);
                 				if((vis.node(all_edges[temp].data.source).data.type!="q")&&(vis.node(all_edges[temp].data.source).data.to_show!=1))
                 				{
                 				html+="<a href='http://genewikiplus.org/index.php?title="+vis.node(all_edges[temp].data.source).data.label+"' target='_blank'>"+vis.node(all_edges[temp].data.source).data.label+"</a><br />";
                 				}
                 			}
                 		}	
                 		vis.select("edges",to_select_edges);
                 		vis.select("nodes",to_select_nodes);
                 		$("#sidebar").html(html);
                 	});
                 	vis.addListener("mouseout","nodes",function(evt){
                 		vis.deselect("nodes",to_select_nodes);
                 		vis.deselect("edges",to_select_edges); 	
                 	});
                 	
              	vis.addListener("click", "nodes", function(evt) {
              		var node = evt.target;
              		if(node.data.type=="SNP")
              		{
			$.getJSON("http://genewikiplus.org/api.php?action=ask&q=[[HasSNP::"+node.data.label+"]]&po=Is+associated+with+disease&format=json&callback=?", function(data) {
				
              });
              }
   if(node.data.type!="disease"&&node.data.type!="q"&&node.data.type!="SNP")
   {
		var disease_id=node.data.type.replace("SNPcount","");
   		for(var temp_edge in network_json["data"]["edges"])
   		{
   			if(network_json["data"]["edges"][temp_edge]["target"]==disease_id)
   			{
   				for(var temp_filtered_check in filtered_nodes)
   				{
   					if(filtered_nodes[temp_filtered_check]==network_json["data"]["edges"][temp_edge]["source"])
   					{
   						filtered_nodes.splice(temp_filtered_check,1);
   					}
   				}
   			}
   		}
   		filtered_nodes.push(node.data.id);
   		render_filter(filtered_nodes);
   }
   
});


              
   						render_filter(filtered_nodes);
                 		function render_filter(filtered_nodes)
                 		{
                 			reverse_filtered_nodes=[];
                 		var occurence_flag=0;
                 		var single_flag=0;
                 		var nodes_all=vis.nodes();
                 		for(var temp_node_vis in nodes_all)
                 				{
                 				occurence_flag=0;
                 				
                 		for(var temp in filtered_nodes)
                 		{
                 					if(filtered_nodes[temp]==nodes_all[temp_node_vis].data.id)
                 					{
                 						occurence_flag=1;			
                 					}		
                 				}
                 				single_flag=0;
                 				for(var temp_repeat in single_notfiltered)
                 				{
                 					if(single_notfiltered[temp_repeat]==nodes_all[temp_node_vis].data.id)
                 					{
                 						single_flag=1;
                 									
                 					}		
                 					
                 				}
                 				if((occurence_flag==0)||(single_flag==1))
                 				{
                 				reverse_filtered_nodes.push(nodes_all[temp_node_vis].data.id);	
                 				}   
                 		}	
                 		vis.filter("nodes",reverse_filtered_nodes);
                 		}
                 		              });
	
	}
	
	function generate_snp(snp_query)
	{
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
    							  options: { radius: 150 }
									};              
                var options = {
                    swfPath: "swf/CytoscapeWeb",
                    flashInstallerPath: "swf/playerProductInstall"
                };
                
                 var counter_per_node=0;
                var counter_for_deletion=0;
                var repeated_node="";
                var unique_node="";
                for(var temp_node in network_json["data"]["nodes"])
                {
                	counter_per_node=0;
                	for(var temp_node2 in network_json["data"]["nodes"])
                	{
                		
                		if(network_json["data"]["nodes"][temp_node]["label"]==network_json["data"]["nodes"][temp_node2]["label"])
                		{
                			counter_per_node++;
                		}
                	}
                	counter_for_deletion=0;
                	
                	if(counter_per_node>1)
                	{
                		
                		repeated_node=network_json["data"]["nodes"][temp_node]["id"];
                		
                		for(var delete_temp in network_json["data"]["nodes"])
                		{
                			
                			if(typeof network_json["data"]["nodes"][delete_temp]["id"] === "undefined")
                			{
                				
                			}	
                			else
                			{                			
                			if(network_json["data"]["nodes"][delete_temp]["label"]==network_json["data"]["nodes"][temp_node]["label"])
                			{
                			counter_for_deletion++;	                			
                			if(counter_for_deletion>1)
                			{
                				//delete [delete_temp]["label"]="To be deleted";
                				for(var delete_edge in network_json["data"]["edges"])
                				{            					
                					if(network_json["data"]["nodes"][delete_temp]["id"]==network_json["data"]["edges"][delete_edge]["target"])
                					{
                						network_json["data"]["edges"][delete_edge]["target"]=repeated_node;
                					}
                				}
                				network_json["data"]["nodes"].splice(delete_temp, 1);	                				
                			}
                			
                			}
                			}	
                		}
                		
                	}
                	
                }
                
                var vis = new org.cytoscapeweb.Visualization(div_id, options);
                global_vis=vis;
                vis.draw({ network: network_json, visualStyle: visual_style, layout:layout });	
                
	}
	            

	function find_category(query_value,data)
	{	
		if(data["ask"]["results"]==undefined)
		{
			$("#networkview").html("Query term entered does not match any term in the database.");
			return "error";
		}
		else if(data["ask"]["results"]["items"][0]["properties"]["type"]["mUrlform"]=="Pages_with_incomplete_PMID_references")
		{
			$("#networkview").html("Query term is returning an identified category- 'Pages_with_incomplete_PMID_references'.");
			return "error";
		}
		else if(data["ask"]["results"]["items"][0]["properties"]["type"]["mUrlform"]=='Human_proteins')
		{
			generate_gene(query_value);
			generate_gene_disease(query_value);
			$("#view_choose").fadeIn();
			$("#export_options").fadeIn();
			$("#networkview").html("Loading network about gene "+query_value+"...");
			$("#view_choose_list").append("<li id='gene_disease_network_display'>Gene->Disease Network</li>");
			$("#sidebar").fadeIn();
			return "gene";
		}
		else if(data["ask"]["results"]["items"][0]["properties"]["type"]["mUrlform"]=='Is_a_snp')
		{
			generate_snp(query_value);
			$("#view_choose").fadeIn();
			$("#export_options").fadeIn();
			$("#networkview").html("Loading network about SNP "+query_value+"...");
			$("#sidebar").fadeOut();
			return "snp";
		}
		else if(data["ask"]["results"]["items"][0]["properties"]["type"]["mUrlform"]=='All_articles_with_dead_external_links')
		{
			generate_disease(query_value);
			$("#view_choose").fadeIn();
			$("#export_options").fadeIn();			
			$("#networkview").html("Loading network about disease "+query_value+"...");
			$("#sidebar").fadeOut();
			return "disease";
		}
	
	}