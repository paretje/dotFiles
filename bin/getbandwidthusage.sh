#!/bin/sh
if [ -f /sys/class/net/ppp0/statistics/rx_bytes ] ; then
	USAGE=$(vnstat --oneline | sed 's/1;.*;\([^;]*\);[^;]*;[^;]*;[^;]*;[^;]*$/\1/')
	echo $USAGE

	ORDER=$(echo $USAGE | cut -d ' ' -f2)
	SIZE=$(echo $USAGE | cut -d '.' -f1)
	if [ "$ORDER" = "MiB" -a $SIZE -gt 50 ]; then
		notify-send 'Bandwidth used!'
	fi
elif [ "$(/sbin/iwgetid)" = 'wlan0     ESSID:"LG-E410i_7795"' ]; then
	# echo differ between bash and dash: both require and support the option -n,
	# but bash requires the option -e as well, to support the \n, while dash
	# doesn't need it, and will simply output it. printf seems to be a more
	# universal solution to print without newline
	printf '+\np' | cat /sys/class/net/wlan0/statistics/rx_bytes /sys/class/net/wlan0/statistics/tx_bytes - | dc | bytes2human.sh
else
	echo ""
fi
