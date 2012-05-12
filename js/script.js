/**
 * @author grrao
 */

$(document).ready(function(){
	$.getJSON("http://genewikiplus.org/api.php?action=ask&q=[[HasSNP::Rs1001179]]&po=Is+associated+with+disease&format=json&callback=?", function(data) {
	
		draw_snp_network(data);
	});
	
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
                vis.draw({ network: network_json, visualStyle: visual_style, layout:layout });	
	}
	            
});
