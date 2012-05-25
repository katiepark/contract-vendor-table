$(document).ready(function()
	{
	// Column highlight widget, adapted from Trib Apps
	$.tablesorter.addWidget({
		id: "columnHighlight",
		format: function(table) {
			if (!this.tds) {
				this.tds = $("td", table.tBodies[0]);
				}
			if (!this.headers) {
				this.headers = $("thead.tablehead th", table);
			}
			this.tds.removeClass("sorted");
			var ascSort = $("th." + table.config.cssAsc);
			var descSort = $("th." + table.config.cssDesc);
			var index = null;
			if (ascSort.length) {
				index = this.headers.index(ascSort[0]);
			}
			if (descSort.length) {
				index = this.headers.index(descSort[0]);
			}
			if (index) {
				$("tr td:nth-child(" + (index+1) + ")", table.tBodies[0]).each(function(row){
					$(this).addClass("sorted");
				});
			}
		}
	});
	
		$("#myTable")
			.tablesorter({debug: false, widgets: ['columnHighlight'], sortList: [[0,0]]})
			.tablesorterFilter({filterContainer: $("#filter-box"),
								filterClearContainer: $("#filter-clear-button"),
								filterColumns: [0],
								filterCaseSensitive: false,
								filterWaitTime: 100});
	}
);