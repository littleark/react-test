import {select} from 'd3-selection';

export default function Chart(data,options) {
	console.log(data,options);
	//console.log(select(options.container))
	select(options.container)
		.selectAll(".el")
		.data(data)
		.enter()
		.append("div")
			.attr("data-name",d=>d)

}