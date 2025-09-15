// Comprehensive Device Database with Real-World Power Consumption Data
// All power values in watts based on manufacturer specifications and EPA data

const deviceDatabase = {
    // Television & Display Devices
    tvs: {
        // 2023-2024 Models
        'samsung_s95c_65_oled_2023': { name: 'Samsung S95C 65" QD-OLED (2023)', watts: 195, year: 2023, category: 'TV', type: 'OLED' },
        'samsung_s95c_55_oled_2023': { name: 'Samsung S95C 55" QD-OLED (2023)', watts: 145, year: 2023, category: 'TV', type: 'OLED' },
        'lg_g3_65_oled_2023': { name: 'LG G3 65" OLED evo (2023)', watts: 180, year: 2023, category: 'TV', type: 'OLED' },
        'lg_g3_55_oled_2023': { name: 'LG G3 55" OLED evo (2023)', watts: 135, year: 2023, category: 'TV', type: 'OLED' },
        'sony_a95l_65_oled_2023': { name: 'Sony A95L 65" QD-OLED (2023)', watts: 190, year: 2023, category: 'TV', type: 'OLED' },
        'samsung_qn90c_65_qled_2023': { name: 'Samsung QN90C 65" Neo QLED (2023)', watts: 165, year: 2023, category: 'TV', type: 'QLED' },
        'tcl_qm8_75_qled_2023': { name: 'TCL QM8 75" Mini-LED (2023)', watts: 210, year: 2023, category: 'TV', type: 'QLED' },
        'vizio_m75q_2023': { name: 'Vizio M-Series Quantum 75" (2023)', watts: 180, year: 2023, category: 'TV', type: 'LED' },

        // 2020-2022 Models
        'lg_c2_65_oled_2022': { name: 'LG C2 65" OLED (2022)', watts: 175, year: 2022, category: 'TV', type: 'OLED' },
        'samsung_qn90b_65_2022': { name: 'Samsung QN90B 65" Neo QLED (2022)', watts: 160, year: 2022, category: 'TV', type: 'QLED' },
        'sony_x95k_65_2022': { name: 'Sony X95K 65" Mini-LED (2022)', watts: 170, year: 2022, category: 'TV', type: 'LED' },
        'lg_c1_65_oled_2021': { name: 'LG C1 65" OLED (2021)', watts: 180, year: 2021, category: 'TV', type: 'OLED' },
        'samsung_qn90a_65_2021': { name: 'Samsung QN90A 65" QLED (2021)', watts: 155, year: 2021, category: 'TV', type: 'QLED' },
        'sony_a90j_65_oled_2021': { name: 'Sony A90J 65" OLED (2021)', watts: 185, year: 2021, category: 'TV', type: 'OLED' },

        // Older Models (2015-2020)
        'samsung_q80t_65_2020': { name: 'Samsung Q80T 65" QLED (2020)', watts: 145, year: 2020, category: 'TV', type: 'QLED' },
        'lg_cx_65_oled_2020': { name: 'LG CX 65" OLED (2020)', watts: 190, year: 2020, category: 'TV', type: 'OLED' },
        'samsung_ks8000_65_2016': { name: 'Samsung KS8000 65" SUHD (2016)', watts: 210, year: 2016, category: 'TV', type: 'LED' },
        'lg_oled_e6_65_2016': { name: 'LG OLED E6 65" (2016)', watts: 220, year: 2016, category: 'TV', type: 'OLED' },

        // Legacy TVs
        'panasonic_plasma_65_2013': { name: 'Panasonic VT60 65" Plasma (2013)', watts: 380, year: 2013, category: 'TV', type: 'Plasma' },
        'samsung_plasma_58_2012': { name: 'Samsung PN58C8000 Plasma (2012)', watts: 340, year: 2012, category: 'TV', type: 'Plasma' },
        'sony_trinitron_36_2005': { name: 'Sony Trinitron 36" CRT (2005)', watts: 200, year: 2005, category: 'TV', type: 'CRT' },
        'panasonic_crt_32_2000': { name: 'Panasonic 32" CRT (2000)', watts: 150, year: 2000, category: 'TV', type: 'CRT' },
    },

    // Computer Systems
    computers: {
        // Gaming Desktops (2023-2024)
        'alienware_aurora_r15_rtx4090': { name: 'Alienware Aurora R15 (RTX 4090)', watts: 750, year: 2023, category: 'Desktop', type: 'Gaming' },
        'asus_rog_strix_rtx4080': { name: 'ASUS ROG Strix GA35 (RTX 4080)', watts: 650, year: 2023, category: 'Desktop', type: 'Gaming' },
        'msi_aegis_rs_rtx4070ti': { name: 'MSI Aegis RS 13 (RTX 4070 Ti)', watts: 550, year: 2023, category: 'Desktop', type: 'Gaming' },
        'hp_omen_45l_rtx4090': { name: 'HP OMEN 45L (RTX 4090)', watts: 800, year: 2023, category: 'Desktop', type: 'Gaming' },
        'corsair_one_i500': { name: 'Corsair One i500 (RTX 4090)', watts: 700, year: 2024, category: 'Desktop', type: 'Gaming' },

        // Workstations
        'dell_precision_7960': { name: 'Dell Precision 7960 Tower', watts: 450, year: 2023, category: 'Desktop', type: 'Workstation' },
        'hp_z8_g5': { name: 'HP Z8 G5 Workstation', watts: 550, year: 2023, category: 'Desktop', type: 'Workstation' },
        'lenovo_thinkstation_p620': { name: 'Lenovo ThinkStation P620', watts: 500, year: 2022, category: 'Desktop', type: 'Workstation' },

        // Office Desktops
        'dell_optiplex_7010': { name: 'Dell OptiPlex 7010 Micro', watts: 65, year: 2023, category: 'Desktop', type: 'Office' },
        'hp_prodesk_400_g9': { name: 'HP ProDesk 400 G9', watts: 90, year: 2023, category: 'Desktop', type: 'Office' },
        'lenovo_thinkcentre_m75q': { name: 'Lenovo ThinkCentre M75q Gen 2', watts: 75, year: 2022, category: 'Desktop', type: 'Office' },

        // All-in-One
        'imac_24_m3_2023': { name: 'iMac 24" M3 (2023)', watts: 85, year: 2023, category: 'Desktop', type: 'All-in-One' },
        'dell_inspiron_27_7720': { name: 'Dell Inspiron 27 7720 AIO', watts: 120, year: 2023, category: 'Desktop', type: 'All-in-One' },
        'hp_envy_34_aio': { name: 'HP Envy 34" All-in-One', watts: 140, year: 2023, category: 'Desktop', type: 'All-in-One' },

        // Gaming Laptops
        'asus_rog_strix_scar_18': { name: 'ASUS ROG Strix SCAR 18 (2024)', watts: 280, year: 2024, category: 'Laptop', type: 'Gaming' },
        'msi_titan_18_hx': { name: 'MSI Titan 18 HX (RTX 4090)', watts: 330, year: 2024, category: 'Laptop', type: 'Gaming' },
        'razer_blade_16_2024': { name: 'Razer Blade 16 (2024)', watts: 250, year: 2024, category: 'Laptop', type: 'Gaming' },
        'alienware_x16_r2': { name: 'Alienware x16 R2', watts: 240, year: 2024, category: 'Laptop', type: 'Gaming' },

        // Professional Laptops
        'macbook_pro_16_m3_max': { name: 'MacBook Pro 16" M3 Max (2023)', watts: 140, year: 2023, category: 'Laptop', type: 'Professional' },
        'dell_xps_15_9530': { name: 'Dell XPS 15 9530 (2023)', watts: 90, year: 2023, category: 'Laptop', type: 'Professional' },
        'lenovo_thinkpad_x1_extreme': { name: 'Lenovo ThinkPad X1 Extreme Gen 6', watts: 95, year: 2023, category: 'Laptop', type: 'Professional' },
        'hp_zbook_studio_g10': { name: 'HP ZBook Studio G10', watts: 110, year: 2023, category: 'Laptop', type: 'Professional' },

        // Ultrabooks
        'macbook_air_15_m2': { name: 'MacBook Air 15" M2 (2023)', watts: 35, year: 2023, category: 'Laptop', type: 'Ultrabook' },
        'dell_xps_13_plus': { name: 'Dell XPS 13 Plus (2023)', watts: 45, year: 2023, category: 'Laptop', type: 'Ultrabook' },
        'asus_zenbook_s13_oled': { name: 'ASUS ZenBook S 13 OLED', watts: 40, year: 2023, category: 'Laptop', type: 'Ultrabook' },
        'lg_gram_17_2023': { name: 'LG Gram 17 (2023)', watts: 38, year: 2023, category: 'Laptop', type: 'Ultrabook' },

        // Older Computers (2015-2020)
        'dell_alienware_area51_2017': { name: 'Alienware Area-51 (2017)', watts: 850, year: 2017, category: 'Desktop', type: 'Gaming' },
        'apple_mac_pro_2019': { name: 'Mac Pro Tower (2019)', watts: 450, year: 2019, category: 'Desktop', type: 'Workstation' },
        'dell_precision_t7910': { name: 'Dell Precision T7910 (2015)', watts: 685, year: 2015, category: 'Desktop', type: 'Workstation' },
    },

    // Kitchen Appliances
    kitchen: {
        // Refrigerators - Current Models (2023-2024)
        'lg_lrfvs3006s': { name: 'LG LRFVS3006S Smart French Door (2023)', watts: 95, year: 2023, category: 'Refrigerator', type: 'French Door' },
        'samsung_rf28r7551sr': { name: 'Samsung RF28R7551SR 4-Door Flex (2023)', watts: 110, year: 2023, category: 'Refrigerator', type: 'French Door' },
        'whirlpool_wrf555sdhv': { name: 'Whirlpool WRF555SDHV French Door (2023)', watts: 105, year: 2023, category: 'Refrigerator', type: 'French Door' },
        'ge_profile_pfe28kynfs': { name: 'GE Profile PFE28KYNFS Smart (2023)', watts: 100, year: 2023, category: 'Refrigerator', type: 'French Door' },
        'kitchenaid_krfc704fps': { name: 'KitchenAid KRFC704FPS Counter-Depth', watts: 115, year: 2023, category: 'Refrigerator', type: 'French Door' },
        'bosch_b36ct80sns': { name: 'Bosch B36CT80SNS 800 Series (2023)', watts: 90, year: 2023, category: 'Refrigerator', type: 'French Door' },

        // Refrigerators - Older Models
        'ge_side_by_side_2010': { name: 'GE Side-by-Side GSS25GSHSS (2010)', watts: 180, year: 2010, category: 'Refrigerator', type: 'Side-by-Side' },
        'whirlpool_top_freezer_2005': { name: 'Whirlpool Top-Freezer (2005)', watts: 220, year: 2005, category: 'Refrigerator', type: 'Top Freezer' },
        'kenmore_elite_2000': { name: 'Kenmore Elite (2000)', watts: 280, year: 2000, category: 'Refrigerator', type: 'Side-by-Side' },
        'frigidaire_1995': { name: 'Frigidaire Gallery (1995)', watts: 350, year: 1995, category: 'Refrigerator', type: 'Top Freezer' },
        'ge_1985': { name: 'GE Refrigerator (1985)', watts: 450, year: 1985, category: 'Refrigerator', type: 'Top Freezer' },

        // Dishwashers
        'bosch_shpm88z75n': { name: 'Bosch SHPM88Z75N 800 Series (2023)', watts: 1200, year: 2023, category: 'Dishwasher', type: 'Built-in' },
        'kitchenaid_kdtm404kps': { name: 'KitchenAid KDTM404KPS (2023)', watts: 1350, year: 2023, category: 'Dishwasher', type: 'Built-in' },
        'miele_g7566scvisf': { name: 'Miele G 7566 SCVi SF (2023)', watts: 900, year: 2023, category: 'Dishwasher', type: 'Built-in' },
        'lg_ldth7972s': { name: 'LG LDTH7972S QuadWash Pro', watts: 1250, year: 2023, category: 'Dishwasher', type: 'Built-in' },
        'whirlpool_wdt750sakz': { name: 'Whirlpool WDT750SAKZ (2022)', watts: 1400, year: 2022, category: 'Dishwasher', type: 'Built-in' },
        'ge_dishwasher_2005': { name: 'GE Dishwasher (2005)', watts: 1800, year: 2005, category: 'Dishwasher', type: 'Built-in' },
        'kenmore_dishwasher_1995': { name: 'Kenmore Dishwasher (1995)', watts: 2200, year: 1995, category: 'Dishwasher', type: 'Built-in' },

        // Cooking Appliances
        'wolf_gr366': { name: 'Wolf GR366 Gas Range (Electric Ignition)', watts: 50, year: 2023, category: 'Range', type: 'Gas' },
        'viking_vesc5366bss': { name: 'Viking VESC5366BSS Electric Range', watts: 12000, year: 2023, category: 'Range', type: 'Electric' },
        'samsung_ne63t8911ss': { name: 'Samsung NE63T8911SS Slide-in Electric', watts: 7200, year: 2023, category: 'Range', type: 'Electric' },
        'ge_cafe_chs900p2ms1': { name: 'GE Café CHS900P2MS1 Induction', watts: 7400, year: 2023, category: 'Range', type: 'Induction' },
        'kitchenaid_kfeg500ess': { name: 'KitchenAid KFEG500ESS Electric', watts: 7000, year: 2022, category: 'Range', type: 'Electric' },

        // Microwaves
        'panasonic_nn_sn966s': { name: 'Panasonic NN-SN966S 2.2 cu ft', watts: 1250, year: 2023, category: 'Microwave', type: 'Countertop' },
        'lg_lmv2031st': { name: 'LG LMV2031ST Over-the-Range', watts: 1000, year: 2023, category: 'Microwave', type: 'Over-Range' },
        'samsung_me21m706bas': { name: 'Samsung ME21M706BAS 2.1 cu ft', watts: 1100, year: 2023, category: 'Microwave', type: 'Over-Range' },
        'whirlpool_wmh31017hs': { name: 'Whirlpool WMH31017HS', watts: 1000, year: 2022, category: 'Microwave', type: 'Over-Range' },
        'sharp_carousel_1995': { name: 'Sharp Carousel (1995)', watts: 1400, year: 1995, category: 'Microwave', type: 'Countertop' },

        // Small Kitchen Appliances
        'vitamix_a3500': { name: 'Vitamix Ascent A3500', watts: 1500, year: 2023, category: 'Blender', type: 'High-Power' },
        'blendtec_designer_725': { name: 'Blendtec Designer 725', watts: 1800, year: 2023, category: 'Blender', type: 'High-Power' },
        'ninja_foodi_power_blender': { name: 'Ninja Foodi Power Blender', watts: 1400, year: 2023, category: 'Blender', type: 'High-Power' },
        'kitchenaid_artisan_mixer': { name: 'KitchenAid Artisan Stand Mixer', watts: 325, year: 2023, category: 'Mixer', type: 'Stand' },
        'cuisinart_dfp14bcny': { name: 'Cuisinart DFP-14BCNY Food Processor', watts: 720, year: 2023, category: 'Food Processor', type: 'Full-Size' },
        'instant_pot_duo_plus': { name: 'Instant Pot Duo Plus 9-in-1', watts: 1200, year: 2023, category: 'Pressure Cooker', type: 'Electric' },
        'ninja_foodi_deluxe': { name: 'Ninja Foodi Deluxe Pressure Cooker', watts: 1400, year: 2023, category: 'Pressure Cooker', type: 'Electric' },
        'breville_smart_oven_air': { name: 'Breville Smart Oven Air Fryer Pro', watts: 1800, year: 2023, category: 'Toaster Oven', type: 'Convection' },
        'cuisinart_toa65': { name: 'Cuisinart TOA-65 Air Fryer Toaster', watts: 1800, year: 2023, category: 'Toaster Oven', type: 'Air Fryer' },
        'nespresso_vertuo_next': { name: 'Nespresso Vertuo Next', watts: 1500, year: 2023, category: 'Coffee Maker', type: 'Pod' },
        'keurig_k_elite': { name: 'Keurig K-Elite', watts: 1470, year: 2023, category: 'Coffee Maker', type: 'Pod' },
        'breville_barista_express': { name: 'Breville Barista Express', watts: 1850, year: 2023, category: 'Coffee Maker', type: 'Espresso' },
        'technivorm_moccamaster': { name: 'Technivorm Moccamaster KBG', watts: 1475, year: 2023, category: 'Coffee Maker', type: 'Drip' },
    },

    // Laundry Appliances
    laundry: {
        // Washing Machines - Current Models
        'lg_wm6700hba': { name: 'LG WM6700HBA AI DD Front Load (2023)', watts: 320, year: 2023, category: 'Washer', type: 'Front Load' },
        'samsung_wf53bb8700at': { name: 'Samsung WF53BB8700AT Bespoke AI (2023)', watts: 350, year: 2023, category: 'Washer', type: 'Front Load' },
        'electrolux_elfw7637at': { name: 'Electrolux ELFW7637AT Perfect Steam', watts: 310, year: 2023, category: 'Washer', type: 'Front Load' },
        'ge_profile_pfw950sptds': { name: 'GE Profile PFW950SPTDS UltraFast', watts: 380, year: 2023, category: 'Washer', type: 'Front Load' },
        'whirlpool_wfw9620hc': { name: 'Whirlpool WFW9620HC Front Load', watts: 340, year: 2023, category: 'Washer', type: 'Front Load' },
        'maytag_mvw7230hw': { name: 'Maytag MVW7230HW Top Load', watts: 450, year: 2023, category: 'Washer', type: 'Top Load' },
        'speed_queen_tr7003wn': { name: 'Speed Queen TR7003WN Top Load', watts: 520, year: 2023, category: 'Washer', type: 'Top Load' },

        // Washing Machines - Older Models
        'whirlpool_duet_2010': { name: 'Whirlpool Duet Front Load (2010)', watts: 480, year: 2010, category: 'Washer', type: 'Front Load' },
        'kenmore_elite_2005': { name: 'Kenmore Elite Top Load (2005)', watts: 580, year: 2005, category: 'Washer', type: 'Top Load' },
        'maytag_neptune_2000': { name: 'Maytag Neptune Front Load (2000)', watts: 550, year: 2000, category: 'Washer', type: 'Front Load' },
        'ge_washer_1995': { name: 'GE Top Load Washer (1995)', watts: 650, year: 1995, category: 'Washer', type: 'Top Load' },
        'whirlpool_1985': { name: 'Whirlpool Heavy Duty (1985)', watts: 750, year: 1985, category: 'Washer', type: 'Top Load' },

        // Dryers - Current Models
        'lg_dlex6700b': { name: 'LG DLEX6700B AI Electric Dryer (2023)', watts: 2800, year: 2023, category: 'Dryer', type: 'Electric' },
        'samsung_dve53bb8700t': { name: 'Samsung DVE53BB8700T Bespoke AI', watts: 2900, year: 2023, category: 'Dryer', type: 'Electric' },
        'electrolux_elfe7637at': { name: 'Electrolux ELFE7637AT Perfect Steam', watts: 2700, year: 2023, category: 'Dryer', type: 'Electric' },
        'ge_profile_pfd95esptds': { name: 'GE Profile PFD95ESPTDS', watts: 3000, year: 2023, category: 'Dryer', type: 'Electric' },
        'whirlpool_wed9620hc': { name: 'Whirlpool WED9620HC Electric', watts: 3100, year: 2023, category: 'Dryer', type: 'Electric' },
        'maytag_med7230hw': { name: 'Maytag MED7230HW Electric', watts: 3200, year: 2023, category: 'Dryer', type: 'Electric' },
        'speed_queen_dr7004we': { name: 'Speed Queen DR7004WE Electric', watts: 3500, year: 2023, category: 'Dryer', type: 'Electric' },

        // Dryers - Older Models
        'whirlpool_duet_dryer_2010': { name: 'Whirlpool Duet Dryer (2010)', watts: 3800, year: 2010, category: 'Dryer', type: 'Electric' },
        'kenmore_dryer_2005': { name: 'Kenmore Electric Dryer (2005)', watts: 4200, year: 2005, category: 'Dryer', type: 'Electric' },
        'ge_dryer_2000': { name: 'GE Electric Dryer (2000)', watts: 4500, year: 2000, category: 'Dryer', type: 'Electric' },
        'maytag_dryer_1995': { name: 'Maytag Electric Dryer (1995)', watts: 4800, year: 1995, category: 'Dryer', type: 'Electric' },
        'whirlpool_dryer_1985': { name: 'Whirlpool Electric Dryer (1985)', watts: 5200, year: 1985, category: 'Dryer', type: 'Electric' },
    },

    // HVAC Systems
    hvac: {
        // Air Conditioners - Window/Portable
        'lg_lw8017ersm': { name: 'LG LW8017ERSM 8,000 BTU Window', watts: 710, year: 2023, category: 'AC', type: 'Window' },
        'friedrich_chill_cp08g10b': { name: 'Friedrich Chill CP08G10B 8,000 BTU', watts: 680, year: 2023, category: 'AC', type: 'Window' },
        'midea_u_maw08v1qwt': { name: 'Midea U MAW08V1QWT 8,000 BTU', watts: 650, year: 2023, category: 'AC', type: 'Window' },
        'ge_ahq06lz': { name: 'GE AHQ06LZ 6,000 BTU Window', watts: 520, year: 2023, category: 'AC', type: 'Window' },
        'lg_lp1419ivsm': { name: 'LG LP1419IVSM Dual Inverter Portable', watts: 1280, year: 2023, category: 'AC', type: 'Portable' },
        'whynter_arc14s': { name: 'Whynter ARC-14S Portable 14,000 BTU', watts: 1300, year: 2023, category: 'AC', type: 'Portable' },
        'black_decker_bpact14hwt': { name: 'BLACK+DECKER BPACT14HWT Portable', watts: 1250, year: 2023, category: 'AC', type: 'Portable' },

        // Central Air Systems
        'carrier_infinity_26': { name: 'Carrier Infinity 26 (3-ton)', watts: 2800, year: 2023, category: 'AC', type: 'Central' },
        'trane_xv20i': { name: 'Trane XV20i Variable Speed (3-ton)', watts: 2600, year: 2023, category: 'AC', type: 'Central' },
        'lennox_xc25': { name: 'Lennox XC25 (3-ton)', watts: 2500, year: 2023, category: 'AC', type: 'Central' },
        'goodman_gsxc18': { name: 'Goodman GSXC18 (3-ton)', watts: 3200, year: 2023, category: 'AC', type: 'Central' },
        'rheem_ra20': { name: 'Rheem RA20 Endeavor (3-ton)', watts: 2900, year: 2023, category: 'AC', type: 'Central' },

        // Heat Pumps
        'mitsubishi_muz_fs': { name: 'Mitsubishi MUZ-FS Hyper-Heating', watts: 2200, year: 2023, category: 'Heat Pump', type: 'Mini-Split' },
        'daikin_aurora': { name: 'Daikin Aurora Single Zone', watts: 1800, year: 2023, category: 'Heat Pump', type: 'Mini-Split' },
        'fujitsu_halcyon': { name: 'Fujitsu Halcyon Mini-Split', watts: 1900, year: 2023, category: 'Heat Pump', type: 'Mini-Split' },
        'carrier_infinity_heat_pump': { name: 'Carrier Infinity 24 Heat Pump', watts: 3500, year: 2023, category: 'Heat Pump', type: 'Central' },
        'trane_xr17': { name: 'Trane XR17 Heat Pump', watts: 3800, year: 2023, category: 'Heat Pump', type: 'Central' },

        // Space Heaters
        'dyson_hp04': { name: 'Dyson HP04 Pure Hot+Cool', watts: 1575, year: 2023, category: 'Heater', type: 'Space' },
        'delonghi_trd40615e': { name: 'DeLonghi TRD40615E Oil Radiator', watts: 1500, year: 2023, category: 'Heater', type: 'Oil' },
        'lasko_754200': { name: 'Lasko 754200 Ceramic Heater', watts: 1500, year: 2023, category: 'Heater', type: 'Ceramic' },
        'vornado_vh200': { name: 'Vornado VH200 Vortex Heater', watts: 1500, year: 2023, category: 'Heater', type: 'Fan' },
        'dr_infrared_dr968': { name: 'Dr. Infrared DR-968 Portable', watts: 1500, year: 2023, category: 'Heater', type: 'Infrared' },
    },

    // Gaming Consoles
    gaming: {
        // Current Generation (2020-2024)
        'ps5_standard': { name: 'PlayStation 5 (Playing)', watts: 180, year: 2020, category: 'Console', type: 'Home' },
        'ps5_digital': { name: 'PlayStation 5 Digital (Playing)', watts: 165, year: 2020, category: 'Console', type: 'Home' },
        'ps5_slim_2023': { name: 'PlayStation 5 Slim (Playing)', watts: 155, year: 2023, category: 'Console', type: 'Home' },
        'xbox_series_x': { name: 'Xbox Series X (Playing)', watts: 170, year: 2020, category: 'Console', type: 'Home' },
        'xbox_series_s': { name: 'Xbox Series S (Playing)', watts: 75, year: 2020, category: 'Console', type: 'Home' },
        'nintendo_switch_oled': { name: 'Nintendo Switch OLED (Docked)', watts: 22, year: 2021, category: 'Console', type: 'Hybrid' },
        'nintendo_switch': { name: 'Nintendo Switch (Docked)', watts: 20, year: 2017, category: 'Console', type: 'Hybrid' },
        'steam_deck_oled': { name: 'Steam Deck OLED (Playing)', watts: 25, year: 2023, category: 'Console', type: 'Handheld' },
        'asus_rog_ally': { name: 'ASUS ROG Ally (Playing)', watts: 30, year: 2023, category: 'Console', type: 'Handheld' },

        // Previous Generation (2013-2020)
        'ps4_pro': { name: 'PlayStation 4 Pro (Playing)', watts: 165, year: 2016, category: 'Console', type: 'Home' },
        'ps4_slim': { name: 'PlayStation 4 Slim (Playing)', watts: 110, year: 2016, category: 'Console', type: 'Home' },
        'ps4_original': { name: 'PlayStation 4 (Playing)', watts: 140, year: 2013, category: 'Console', type: 'Home' },
        'xbox_one_x': { name: 'Xbox One X (Playing)', watts: 175, year: 2017, category: 'Console', type: 'Home' },
        'xbox_one_s': { name: 'Xbox One S (Playing)', watts: 90, year: 2016, category: 'Console', type: 'Home' },
        'xbox_one_original': { name: 'Xbox One (Playing)', watts: 150, year: 2013, category: 'Console', type: 'Home' },
        'wii_u': { name: 'Nintendo Wii U (Playing)', watts: 35, year: 2012, category: 'Console', type: 'Home' },

        // Older Generations
        'ps3_slim': { name: 'PlayStation 3 Slim (Playing)', watts: 85, year: 2009, category: 'Console', type: 'Home' },
        'ps3_original': { name: 'PlayStation 3 (Playing)', watts: 190, year: 2006, category: 'Console', type: 'Home' },
        'xbox_360_slim': { name: 'Xbox 360 S (Playing)', watts: 90, year: 2010, category: 'Console', type: 'Home' },
        'xbox_360_original': { name: 'Xbox 360 (Playing)', watts: 180, year: 2005, category: 'Console', type: 'Home' },
        'wii': { name: 'Nintendo Wii (Playing)', watts: 18, year: 2006, category: 'Console', type: 'Home' },
        'ps2_slim': { name: 'PlayStation 2 Slim (Playing)', watts: 24, year: 2004, category: 'Console', type: 'Home' },
        'ps2_original': { name: 'PlayStation 2 (Playing)', watts: 45, year: 2000, category: 'Console', type: 'Home' },
        'xbox_original': { name: 'Original Xbox (Playing)', watts: 70, year: 2001, category: 'Console', type: 'Home' },
        'gamecube': { name: 'Nintendo GameCube (Playing)', watts: 23, year: 2001, category: 'Console', type: 'Home' },
        'n64': { name: 'Nintendo 64 (Playing)', watts: 19, year: 1996, category: 'Console', type: 'Home' },
        'ps1': { name: 'PlayStation (Playing)', watts: 10, year: 1994, category: 'Console', type: 'Home' },
    },

    // Smart Home & IoT Devices
    smart_home: {
        // Smart Speakers
        'amazon_echo_4th': { name: 'Amazon Echo (4th Gen)', watts: 3, year: 2020, category: 'Smart Speaker', type: 'Assistant' },
        'google_nest_audio': { name: 'Google Nest Audio', watts: 2.5, year: 2020, category: 'Smart Speaker', type: 'Assistant' },
        'apple_homepod_mini': { name: 'Apple HomePod mini', watts: 3.5, year: 2020, category: 'Smart Speaker', type: 'Assistant' },
        'amazon_echo_show_15': { name: 'Amazon Echo Show 15', watts: 15, year: 2021, category: 'Smart Display', type: 'Assistant' },
        'google_nest_hub_max': { name: 'Google Nest Hub Max', watts: 10, year: 2019, category: 'Smart Display', type: 'Assistant' },

        // Smart Lighting
        'philips_hue_a19': { name: 'Philips Hue A19 Bulb', watts: 9, year: 2023, category: 'Smart Light', type: 'LED' },
        'lifx_a19': { name: 'LIFX A19 Smart Bulb', watts: 11, year: 2023, category: 'Smart Light', type: 'LED' },
        'nanoleaf_shapes': { name: 'Nanoleaf Shapes (7 panels)', watts: 14, year: 2023, category: 'Smart Light', type: 'LED Panel' },
        'govee_immersion': { name: 'Govee Immersion TV Light Strip', watts: 24, year: 2023, category: 'Smart Light', type: 'LED Strip' },

        // Smart Plugs & Switches
        'tp_link_kasa_hs103': { name: 'TP-Link Kasa HS103 Smart Plug', watts: 1, year: 2023, category: 'Smart Plug', type: 'WiFi' },
        'amazon_smart_plug': { name: 'Amazon Smart Plug', watts: 1.5, year: 2023, category: 'Smart Plug', type: 'WiFi' },
        'wemo_smart_switch': { name: 'Wemo Smart Light Switch', watts: 0.5, year: 2023, category: 'Smart Switch', type: 'WiFi' },

        // Security Cameras
        'ring_spotlight_cam': { name: 'Ring Spotlight Cam Plus', watts: 4, year: 2023, category: 'Security', type: 'Camera' },
        'arlo_pro_4': { name: 'Arlo Pro 4 (Per Camera)', watts: 3, year: 2023, category: 'Security', type: 'Camera' },
        'nest_cam_outdoor': { name: 'Nest Cam (battery)', watts: 2.5, year: 2023, category: 'Security', type: 'Camera' },
        'eufy_cam_3': { name: 'eufy Security eufyCam 3', watts: 2, year: 2023, category: 'Security', type: 'Camera' },

        // Smart Thermostats
        'nest_learning_3rd': { name: 'Nest Learning Thermostat 3rd Gen', watts: 0.5, year: 2015, category: 'Thermostat', type: 'Smart' },
        'ecobee_smart_premium': { name: 'ecobee Smart Thermostat Premium', watts: 3.5, year: 2023, category: 'Thermostat', type: 'Smart' },
        'honeywell_t9': { name: 'Honeywell Home T9', watts: 2, year: 2023, category: 'Thermostat', type: 'Smart' },
    },

    // Office Equipment
    office: {
        // Monitors
        'dell_u3223qe': { name: 'Dell UltraSharp U3223QE 32" 4K', watts: 45, year: 2023, category: 'Monitor', type: 'LED' },
        'lg_32un880': { name: 'LG 32UN880 32" 4K Ergo', watts: 40, year: 2023, category: 'Monitor', type: 'LED' },
        'samsung_odyssey_g9': { name: 'Samsung Odyssey G9 49" Curved', watts: 120, year: 2023, category: 'Monitor', type: 'LED' },
        'apple_studio_display': { name: 'Apple Studio Display 27"', watts: 50, year: 2022, category: 'Monitor', type: 'LED' },
        'asus_proart_pa32ucx': { name: 'ASUS ProArt PA32UCX-K 32"', watts: 95, year: 2023, category: 'Monitor', type: 'Mini-LED' },
        'benq_sw321c': { name: 'BenQ SW321C PhotoVue 32"', watts: 60, year: 2023, category: 'Monitor', type: 'LED' },

        // Printers
        'hp_laserjet_pro_m404n': { name: 'HP LaserJet Pro M404n', watts: 550, year: 2023, category: 'Printer', type: 'Laser' },
        'brother_hl_l2350dw': { name: 'Brother HL-L2350DW', watts: 460, year: 2023, category: 'Printer', type: 'Laser' },
        'canon_imageclass_mf445dw': { name: 'Canon imageCLASS MF445dw', watts: 580, year: 2023, category: 'Printer', type: 'Laser' },
        'epson_ecotank_et4850': { name: 'Epson EcoTank ET-4850', watts: 12, year: 2023, category: 'Printer', type: 'Inkjet' },
        'hp_officejet_pro_9015e': { name: 'HP OfficeJet Pro 9015e', watts: 30, year: 2023, category: 'Printer', type: 'Inkjet' },
        'canon_pixma_ts9120': { name: 'Canon PIXMA TS9120', watts: 18, year: 2023, category: 'Printer', type: 'Inkjet' },

        // Networking
        'netgear_nighthawk_ax12': { name: 'Netgear Nighthawk AX12 Router', watts: 20, year: 2023, category: 'Network', type: 'Router' },
        'asus_ax6000': { name: 'ASUS RT-AX88U WiFi 6 Router', watts: 18, year: 2023, category: 'Network', type: 'Router' },
        'eero_pro_6e': { name: 'eero Pro 6E Mesh System', watts: 15, year: 2023, category: 'Network', type: 'Mesh' },
        'google_nest_wifi_pro': { name: 'Google Nest Wifi Pro 6E', watts: 13, year: 2023, category: 'Network', type: 'Mesh' },
        'synology_ds923plus': { name: 'Synology DS923+ NAS (4-bay)', watts: 40, year: 2023, category: 'Network', type: 'NAS' },
        'qnap_ts453d': { name: 'QNAP TS-453D NAS (4-bay)', watts: 45, year: 2023, category: 'Network', type: 'NAS' },
    }
};

// Helper function to search devices
function searchDevices(query) {
    const results = [];
    const searchTerm = query.toLowerCase();

    for (const category in deviceDatabase) {
        for (const deviceId in deviceDatabase[category]) {
            const device = deviceDatabase[category][deviceId];
            if (device.name.toLowerCase().includes(searchTerm) ||
                device.category.toLowerCase().includes(searchTerm) ||
                device.type.toLowerCase().includes(searchTerm)) {
                results.push({
                    id: deviceId,
                    ...device,
                    mainCategory: category
                });
            }
        }
    }

    return results;
}

// Function to get devices by category
function getDevicesByCategory(category) {
    return deviceDatabase[category] || {};
}

// Function to get device by ID
function getDeviceById(category, deviceId) {
    return deviceDatabase[category]?.[deviceId] || null;
}

// Function to get devices by year range
function getDevicesByYearRange(startYear, endYear) {
    const results = [];

    for (const category in deviceDatabase) {
        for (const deviceId in deviceDatabase[category]) {
            const device = deviceDatabase[category][deviceId];
            if (device.year >= startYear && device.year <= endYear) {
                results.push({
                    id: deviceId,
                    ...device,
                    mainCategory: category
                });
            }
        }
    }

    return results;
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        deviceDatabase,
        searchDevices,
        getDevicesByCategory,
        getDeviceById,
        getDevicesByYearRange
    };
}