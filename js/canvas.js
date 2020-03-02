	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var grad = ctx.createLinearGradient(300,815,700,200);

	grad.addColorStop(0, 'rgb(170,102,204)');
	grad.addColorStop(1, 'rgb(213,157,241)');

	ctx.fillStyle = grad;

	var p = new Path2D('M147.16,500.24c86-151.35,251.34-315.39,318.58-358.61s164.9-109.4,290.3-119,295.64,9.07,444,233.2,79.65,436.59,66.18,466.93c-58,130.51-136.62,262-472.81,327.13S104.3,965.14,62.31,873.79C42,829.67,4.68,751.05,147.16,500.24Z');
	ctx.fill(p);