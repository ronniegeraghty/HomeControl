#!usr/bin/env python

import scapy.all as scapy
import optparse

def scan(ip):
    arp_request = scapy.ARP(pdst=ip)
    broadcast = scapy.Ether(dst="ff:ff:ff:ff:ff:ff")
    arp_request_broadcast=broadcast/arp_request
    answered_list = scapy.srp(arp_request_broadcast, timeout=1, verbose=False)[0]

    clients_list=[]
    for element in answered_list:
        client_dict={"ip":element[1].psrc, "mac":element[1].hwsrc}
        clients_list.append(client_dict)


    return clients_list

def print_result(results_list):
    print("IP\t\t\tMAC Address\n----------------------------------------")

    for client in results_list:
        print(client["ip"] + "\t\t" + client["mac"])

def get_arguments():
    parser = optparse.OptionParser()
    parser.add_option("-t", "--target", dest="ip_range", help="Enter the range of IPs to be scanned")
    (options, args) = parser.parse_args()

    if not options.ip_range:
        parser.error("[-]please specify ip address, use --help for more info")

    return options

myfunc = get_arguments()
scan_result = scan(myfunc.ip_range)
print_result(scan_result)