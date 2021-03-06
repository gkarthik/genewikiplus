<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html>
    
    <head>
        <title>Gene Wiki Plus</title>
        <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/jquery.event.drag-2.0.min.js"></script>
        <script type="text/javascript" src="js/jquery.event.drop-2.0.min.js"></script>
        <script type="text/javascript" src="js/jquery-ui-1.8.16.custom.min.js"></script>
        <script type="text/javascript" src="js/slick.core.js"></script>
        <script type="text/javascript" src="js/slick.grid.js"></script>
        <script type="text/javascript" src="js/min/json2.min.js"></script>        
        <script type="text/javascript" src="js/min/AC_OETags.min.js"></script>        
        <script type="text/javascript" src="js/min/cytoscapeweb.min.js"></script>
        <script type="text/javascript">
        	var disease_ontology=<?php  $data=file_get_contents('do.json'); echo $data; ?>;
        </script>
		<script type="text/javascript" src="js/script.js"></script>
		<link href="stylesheet.css" rel="stylesheet" />
		<link href="slick.grid.css" rel="stylesheet" />
    </head>
    
    <body>
    	<div id="hover_box"></div>
    	<div id="overlay"></div>
    	<div id="wrapper">
    		<div id="litebox">
    			<span id="close">Close</span><br /><br />
    			<span id="query_title"></span><br />
    			<input type="text" id="query_text" /><input type="button" value="Search" id="query_button" />
    			
    		</div>
    		
    		<div id="leftsidebar">
    			<!--
    			<ul id="main">
    				<li id="snp">SNP-Gene-Disease</li>
    				<li id="gene">Gene-SNP-Disease</li>
    				<li id="disease">Disease-Gene-SNP</li>
    				<li id="gene_disease">Gene-Disease</li>
    				
    			</ul>
    			-->
    			<div id="omni_wrapper">
    			<input type="text" id="omni_query" placeholder="Enter Gene/Snp/Disease" /><input type="submit" id="omni_submit" value="Query" />
    			
    			</div>
    			<div id="export_options">
    				
    				<ul>
    					<li id="pdf">PDF</li>
    					<li id="png">PNG</li>
    					<li id="txt">Text</li>
    					<li id="svg">SVG</li>
    				</ul>
    			</div>
    		</div>
    		<div id="content">
    			<div id="view_choose">
    				<ul id="view_choose_list">
    					<li id="network_view">Network</li>
    					<li id="tabular_view">Tabular</li>
    				</ul>
    			</div>
    			<div id="tabulardata"></div>
    			<div id="networkview">Query for Genes,SNPs and Diseases from the left sidebar. The network will be generated here.</div>
    			<div id="networkview2">Gene-Disease network</div>
    			<div id="sidebar"></div>
    		</div>
    		
    	</div>
    </body>
</html>