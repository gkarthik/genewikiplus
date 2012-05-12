/**
 * @author grrao
 */

$(document).ready(function(){
	var div_id = "networkview";
                var network_json = {
                    data: {
                        nodes: [ { id: "1" }, { id: "2" } ],
                        edges: [ { id: "2to1", target: "1", source: "2" } ]
                    }
                };
                var options = {
                    swfPath: "swf/CytoscapeWeb",
                    flashInstallerPath: "swf/playerProductInstall"
                };
                var vis = new org.cytoscapeweb.Visualization(div_id, options);
                vis.draw({ network: network_json });
            
});
