// My Energy Footprint JavaScript Application

const applianceDatabase = {
    // Entertainment & Electronics
    'tv_led_32': { name: '32" LED TV', watts: 60, category: 'Entertainment' },
    'tv_led_43': { name: '43" LED TV', watts: 80, category: 'Entertainment' },
    'tv_led_55': { name: '55" LED TV', watts: 100, category: 'Entertainment' },
    'tv_led_65': { name: '65" LED TV', watts: 150, category: 'Entertainment' },
    'tv_led_75': { name: '75" LED TV', watts: 200, category: 'Entertainment' },
    'tv_oled_55': { name: '55" OLED TV', watts: 120, category: 'Entertainment' },
    'tv_oled_65': { name: '65" OLED TV', watts: 180, category: 'Entertainment' },
    'tv_plasma_50': { name: '50" Plasma TV (Old)', watts: 300, category: 'Entertainment' },
    'tv_crt_32': { name: '32" CRT TV (Old)', watts: 150, category: 'Entertainment' },
    'soundbar_basic': { name: 'Basic Soundbar', watts: 30, category: 'Entertainment' },
    'soundbar_premium': { name: 'Premium Soundbar with Subwoofer', watts: 100, category: 'Entertainment' },
    'home_theater_system': { name: 'Home Theater System', watts: 200, category: 'Entertainment' },
    'stereo_system': { name: 'Stereo System', watts: 50, category: 'Entertainment' },
    'bluetooth_speaker': { name: 'Bluetooth Speaker', watts: 15, category: 'Entertainment' },
    'record_player': { name: 'Record Player/Turntable', watts: 25, category: 'Entertainment' },
    'dvd_player': { name: 'DVD Player', watts: 20, category: 'Entertainment' },
    'blu_ray_player': { name: 'Blu-ray Player', watts: 25, category: 'Entertainment' },
    'cable_box': { name: 'Cable/Satellite Box', watts: 30, category: 'Entertainment' },
    'streaming_device': { name: 'Streaming Device (Roku/Apple TV)', watts: 5, category: 'Entertainment' },
    'video_projector': { name: 'Video Projector', watts: 250, category: 'Entertainment' },

    // Computing
    'gaming_pc_high': { name: 'Gaming PC (High-End)', watts: 500, category: 'Computing' },
    'gaming_pc_mid': { name: 'Gaming PC (Mid-Range)', watts: 300, category: 'Computing' },
    'gaming_pc_entry': { name: 'Gaming PC (Entry Level)', watts: 200, category: 'Computing' },
    'desktop_pc_office': { name: 'Desktop PC (Office)', watts: 150, category: 'Computing' },
    'desktop_pc_home': { name: 'Desktop PC (Home)', watts: 200, category: 'Computing' },
    'all_in_one_pc': { name: 'All-in-One PC', watts: 120, category: 'Computing' },
    'laptop_gaming': { name: 'Gaming Laptop', watts: 150, category: 'Computing' },
    'laptop_standard': { name: 'Standard Laptop', watts: 65, category: 'Computing' },
    'laptop_ultrabook': { name: 'Ultrabook/Thin Laptop', watts: 45, category: 'Computing' },
    'laptop_chromebook': { name: 'Chromebook', watts: 25, category: 'Computing' },
    'tablet_ipad': { name: 'iPad/Tablet (Charging)', watts: 12, category: 'Computing' },
    'monitor_24_led': { name: '24" LED Monitor', watts: 25, category: 'Computing' },
    'monitor_27_led': { name: '27" LED Monitor', watts: 35, category: 'Computing' },
    'monitor_32_4k': { name: '32" 4K Monitor', watts: 60, category: 'Computing' },
    'monitor_ultrawide': { name: 'Ultrawide Monitor (34")', watts: 80, category: 'Computing' },
    'monitor_crt_old': { name: 'CRT Monitor (Old)', watts: 100, category: 'Computing' },
    'external_hard_drive': { name: 'External Hard Drive', watts: 10, category: 'Computing' },
    'nas_drive_2bay': { name: 'NAS Drive (2-Bay)', watts: 30, category: 'Computing' },
    'nas_drive_4bay': { name: 'NAS Drive (4-Bay)', watts: 60, category: 'Computing' },
    'printer_inkjet': { name: 'Inkjet Printer', watts: 15, category: 'Computing' },
    'printer_laser': { name: 'Laser Printer', watts: 400, category: 'Computing' },
    'scanner': { name: 'Document Scanner', watts: 20, category: 'Computing' },
    'router_home': { name: 'Home WiFi Router', watts: 10, category: 'Computing' },
    'modem': { name: 'Cable/DSL Modem', watts: 15, category: 'Computing' },
    'ups_battery': { name: 'UPS Battery Backup', watts: 5, category: 'Computing' },

    // Kitchen Appliances
    'refrigerator_modern': { name: 'Modern Energy-Efficient Refrigerator', watts: 100, category: 'Kitchen' },
    'refrigerator_old': { name: 'Old Refrigerator (10+ years)', watts: 200, category: 'Kitchen' },
    'refrigerator_side_by_side': { name: 'Side-by-Side Refrigerator', watts: 150, category: 'Kitchen' },
    'refrigerator_french_door': { name: 'French Door Refrigerator', watts: 120, category: 'Kitchen' },
    'mini_fridge': { name: 'Mini Refrigerator', watts: 70, category: 'Kitchen' },
    'wine_cooler': { name: 'Wine Cooler', watts: 100, category: 'Kitchen' },
    'freezer_chest': { name: 'Chest Freezer', watts: 150, category: 'Kitchen' },
    'freezer_upright': { name: 'Upright Freezer', watts: 120, category: 'Kitchen' },
    'microwave_700w': { name: 'Microwave Oven (700W)', watts: 700, category: 'Kitchen' },
    'microwave_1000w': { name: 'Microwave Oven (1000W)', watts: 1000, category: 'Kitchen' },
    'microwave_1200w': { name: 'Microwave Oven (1200W)', watts: 1200, category: 'Kitchen' },
    'oven_electric': { name: 'Electric Oven', watts: 2500, category: 'Kitchen' },
    'oven_convection': { name: 'Convection Oven', watts: 1800, category: 'Kitchen' },
    'toaster_oven': { name: 'Toaster Oven', watts: 1200, category: 'Kitchen' },
    'toaster_2slice': { name: 'Toaster (2-slice)', watts: 800, category: 'Kitchen' },
    'toaster_4slice': { name: 'Toaster (4-slice)', watts: 1200, category: 'Kitchen' },
    'coffee_maker_drip': { name: 'Drip Coffee Maker', watts: 900, category: 'Kitchen' },
    'coffee_maker_single': { name: 'Single-Serve Coffee Maker', watts: 1400, category: 'Kitchen' },
    'espresso_machine': { name: 'Espresso Machine', watts: 1300, category: 'Kitchen' },
    'coffee_grinder': { name: 'Coffee Grinder', watts: 150, category: 'Kitchen' },
    'blender_standard': { name: 'Standard Blender', watts: 400, category: 'Kitchen' },
    'blender_high_power': { name: 'High-Power Blender', watts: 1200, category: 'Kitchen' },
    'food_processor': { name: 'Food Processor', watts: 500, category: 'Kitchen' },
    'stand_mixer': { name: 'Stand Mixer', watts: 300, category: 'Kitchen' },
    'hand_mixer': { name: 'Hand Mixer', watts: 200, category: 'Kitchen' },
    'slow_cooker': { name: 'Slow Cooker', watts: 200, category: 'Kitchen' },
    'pressure_cooker': { name: 'Electric Pressure Cooker', watts: 1000, category: 'Kitchen' },
    'rice_cooker': { name: 'Rice Cooker', watts: 300, category: 'Kitchen' },
    'air_fryer': { name: 'Air Fryer', watts: 1200, category: 'Kitchen' },
    'deep_fryer': { name: 'Deep Fryer', watts: 1800, category: 'Kitchen' },
    'electric_kettle': { name: 'Electric Kettle', watts: 1200, category: 'Kitchen' },
    'hot_water_dispenser': { name: 'Hot Water Dispenser', watts: 500, category: 'Kitchen' },
    'ice_maker': { name: 'Countertop Ice Maker', watts: 120, category: 'Kitchen' },
    'garbage_disposal': { name: 'Garbage Disposal', watts: 500, category: 'Kitchen' },
    'dishwasher_standard': { name: 'Standard Dishwasher', watts: 1800, category: 'Kitchen' },
    'dishwasher_compact': { name: 'Compact Dishwasher', watts: 1200, category: 'Kitchen' },
    'range_hood': { name: 'Range Hood Fan', watts: 100, category: 'Kitchen' },

    // Laundry
    'washing_machine_top': { name: 'Top-Load Washing Machine', watts: 500, category: 'Laundry' },
    'washing_machine_front': { name: 'Front-Load Washing Machine', watts: 400, category: 'Laundry' },
    'washing_machine_he': { name: 'High-Efficiency Washing Machine', watts: 300, category: 'Laundry' },
    'dryer_electric': { name: 'Electric Clothes Dryer', watts: 3000, category: 'Laundry' },
    'dryer_gas': { name: 'Gas Dryer (Electric Components)', watts: 300, category: 'Laundry' },
    'washer_dryer_combo': { name: 'Washer/Dryer Combo Unit', watts: 2000, category: 'Laundry' },
    'iron_steam': { name: 'Steam Iron', watts: 1200, category: 'Laundry' },
    'iron_travel': { name: 'Travel Iron', watts: 800, category: 'Laundry' },
    'steamer_garment': { name: 'Garment Steamer', watts: 1000, category: 'Laundry' },

    // Climate Control
    'air_conditioner_window': { name: 'Window Air Conditioner (8,000 BTU)', watts: 1200, category: 'Climate' },
    'air_conditioner_window_large': { name: 'Window Air Conditioner (12,000 BTU)', watts: 1800, category: 'Climate' },
    'air_conditioner_portable': { name: 'Portable Air Conditioner', watts: 1400, category: 'Climate' },
    'central_air_2ton': { name: 'Central Air Conditioning (2 Ton)', watts: 3500, category: 'Climate' },
    'central_air_3ton': { name: 'Central Air Conditioning (3 Ton)', watts: 5000, category: 'Climate' },
    'central_air_4ton': { name: 'Central Air Conditioning (4 Ton)', watts: 6500, category: 'Climate' },
    'heat_pump_small': { name: 'Heat Pump (Small)', watts: 3000, category: 'Climate' },
    'heat_pump_large': { name: 'Heat Pump (Large)', watts: 5000, category: 'Climate' },
    'space_heater_small': { name: 'Space Heater (Small)', watts: 1000, category: 'Climate' },
    'space_heater_large': { name: 'Space Heater (Large)', watts: 1500, category: 'Climate' },
    'baseboard_heater': { name: 'Electric Baseboard Heater', watts: 1200, category: 'Climate' },
    'oil_heater': { name: 'Oil-Filled Radiator Heater', watts: 1500, category: 'Climate' },
    'ceiling_fan_small': { name: 'Ceiling Fan (36")', watts: 55, category: 'Climate' },
    'ceiling_fan_large': { name: 'Ceiling Fan (52")', watts: 75, category: 'Climate' },
    'tower_fan': { name: 'Tower Fan', watts: 45, category: 'Climate' },
    'box_fan': { name: 'Box Fan', watts: 100, category: 'Climate' },
    'oscillating_fan': { name: 'Oscillating Fan', watts: 60, category: 'Climate' },
    'whole_house_fan': { name: 'Whole House Fan', watts: 400, category: 'Climate' },
    'humidifier_cool': { name: 'Cool Mist Humidifier', watts: 30, category: 'Climate' },
    'humidifier_warm': { name: 'Warm Mist Humidifier', watts: 200, category: 'Climate' },
    'dehumidifier_small': { name: 'Dehumidifier (30 pint)', watts: 400, category: 'Climate' },
    'dehumidifier_large': { name: 'Dehumidifier (70 pint)', watts: 700, category: 'Climate' },
    'air_purifier_small': { name: 'Air Purifier (Small Room)', watts: 50, category: 'Climate' },
    'air_purifier_large': { name: 'Air Purifier (Large Room)', watts: 120, category: 'Climate' },

    // Lighting
    'led_bulb_5w': { name: 'LED Bulb (5W)', watts: 5, category: 'Lighting' },
    'led_bulb_9w': { name: 'LED Bulb (9W)', watts: 9, category: 'Lighting' },
    'led_bulb_13w': { name: 'LED Bulb (13W)', watts: 13, category: 'Lighting' },
    'led_bulb_18w': { name: 'LED Bulb (18W)', watts: 18, category: 'Lighting' },
    'cfl_bulb_13w': { name: 'CFL Bulb (13W)', watts: 13, category: 'Lighting' },
    'cfl_bulb_18w': { name: 'CFL Bulb (18W)', watts: 18, category: 'Lighting' },
    'cfl_bulb_23w': { name: 'CFL Bulb (23W)', watts: 23, category: 'Lighting' },
    'incandescent_40w': { name: 'Incandescent Bulb (40W)', watts: 40, category: 'Lighting' },
    'incandescent_60w': { name: 'Incandescent Bulb (60W)', watts: 60, category: 'Lighting' },
    'incandescent_75w': { name: 'Incandescent Bulb (75W)', watts: 75, category: 'Lighting' },
    'incandescent_100w': { name: 'Incandescent Bulb (100W)', watts: 100, category: 'Lighting' },
    'halogen_bulb_50w': { name: 'Halogen Bulb (50W)', watts: 50, category: 'Lighting' },
    'halogen_bulb_75w': { name: 'Halogen Bulb (75W)', watts: 75, category: 'Lighting' },
    'track_lighting': { name: 'Track Lighting (4 bulbs)', watts: 200, category: 'Lighting' },
    'chandelier': { name: 'Chandelier (8 bulbs)', watts: 320, category: 'Lighting' },
    'fluorescent_tube_t8': { name: 'T8 Fluorescent Tube (32W)', watts: 32, category: 'Lighting' },
    'fluorescent_tube_t12': { name: 'T12 Fluorescent Tube (40W)', watts: 40, category: 'Lighting' },
    'led_strip_lights': { name: 'LED Strip Lights (16ft)', watts: 24, category: 'Lighting' },
    'outdoor_flood_light': { name: 'Outdoor LED Flood Light', watts: 30, category: 'Lighting' },
    'security_light': { name: 'Motion Security Light', watts: 20, category: 'Lighting' },
    'porch_light': { name: 'Porch Light', watts: 15, category: 'Lighting' },
    'landscape_lighting': { name: 'Landscape Lighting (per fixture)', watts: 5, category: 'Lighting' },
    'christmas_lights_led': { name: 'LED Christmas Lights (100 count)', watts: 8, category: 'Lighting' },
    'christmas_lights_incandescent': { name: 'Incandescent Christmas Lights (100 count)', watts: 40, category: 'Lighting' },

    // Personal Electronics
    'phone_charger_iphone': { name: 'iPhone Charger', watts: 5, category: 'Electronics' },
    'phone_charger_android': { name: 'Android Phone Charger', watts: 5, category: 'Electronics' },
    'phone_charger_fast': { name: 'Fast Phone Charger', watts: 20, category: 'Electronics' },
    'tablet_charger': { name: 'Tablet Charger', watts: 12, category: 'Electronics' },
    'smartwatch_charger': { name: 'Smartwatch Charger', watts: 2, category: 'Electronics' },
    'wireless_charging_pad': { name: 'Wireless Charging Pad', watts: 15, category: 'Electronics' },
    'power_bank_charging': { name: 'Power Bank (Charging)', watts: 10, category: 'Electronics' },
    'electric_toothbrush': { name: 'Electric Toothbrush Charger', watts: 2, category: 'Electronics' },
    'hair_dryer_standard': { name: 'Hair Dryer (Standard)', watts: 1200, category: 'Electronics' },
    'hair_dryer_ionic': { name: 'Ionic Hair Dryer', watts: 1875, category: 'Electronics' },
    'curling_iron': { name: 'Curling Iron', watts: 40, category: 'Electronics' },
    'flat_iron': { name: 'Hair Straightener', watts: 45, category: 'Electronics' },
    'electric_shaver': { name: 'Electric Shaver (Charging)', watts: 8, category: 'Electronics' },

    // Gaming & Hobby
    'gaming_console_ps5': { name: 'PlayStation 5', watts: 180, category: 'Gaming' },
    'gaming_console_xbox': { name: 'Xbox Series X', watts: 170, category: 'Gaming' },
    'gaming_console_switch': { name: 'Nintendo Switch (Docked)', watts: 20, category: 'Gaming' },
    'gaming_console_ps4': { name: 'PlayStation 4', watts: 150, category: 'Gaming' },
    'gaming_console_xbox_one': { name: 'Xbox One', watts: 140, category: 'Gaming' },
    'vr_headset': { name: 'VR Headset System', watts: 100, category: 'Gaming' },
    'arcade_cabinet': { name: 'Arcade Cabinet', watts: 400, category: 'Gaming' },
    'pinball_machine': { name: 'Pinball Machine', watts: 300, category: 'Gaming' },
    '3d_printer': { name: '3D Printer', watts: 200, category: 'Hobby' },
    'sewing_machine': { name: 'Electric Sewing Machine', watts: 100, category: 'Hobby' },
    'serger': { name: 'Serger/Overlock Machine', watts: 120, category: 'Hobby' },
    'embroidery_machine': { name: 'Embroidery Machine', watts: 150, category: 'Hobby' },

    // Home Maintenance
    'vacuum_upright': { name: 'Upright Vacuum Cleaner', watts: 1200, category: 'Cleaning' },
    'vacuum_canister': { name: 'Canister Vacuum Cleaner', watts: 1000, category: 'Cleaning' },
    'vacuum_handheld': { name: 'Handheld Vacuum', watts: 100, category: 'Cleaning' },
    'vacuum_robot': { name: 'Robot Vacuum', watts: 30, category: 'Cleaning' },
    'shop_vac': { name: 'Shop Vacuum', watts: 1400, category: 'Cleaning' },
    'carpet_cleaner': { name: 'Carpet Cleaner', watts: 1200, category: 'Cleaning' },
    'steam_cleaner': { name: 'Steam Cleaner', watts: 1600, category: 'Cleaning' },
    'pressure_washer': { name: 'Electric Pressure Washer', watts: 1800, category: 'Cleaning' },

    // Water & Pool
    'water_heater_40gal': { name: 'Electric Water Heater (40 gal)', watts: 4500, category: 'Water' },
    'water_heater_50gal': { name: 'Electric Water Heater (50 gal)', watts: 4500, category: 'Water' },
    'water_heater_tankless': { name: 'Tankless Electric Water Heater', watts: 15000, category: 'Water' },
    'well_pump': { name: 'Well Water Pump', watts: 1000, category: 'Water' },
    'sump_pump': { name: 'Sump Pump', watts: 800, category: 'Water' },
    'pool_pump': { name: 'Swimming Pool Pump', watts: 1200, category: 'Water' },
    'pool_heater': { name: 'Electric Pool Heater', watts: 5000, category: 'Water' },
    'hot_tub': { name: 'Hot Tub/Spa', watts: 1500, category: 'Water' },

    // Workshop & Garage
    'garage_door_opener': { name: 'Garage Door Opener', watts: 600, category: 'Garage' },
    'air_compressor': { name: 'Air Compressor', watts: 1800, category: 'Workshop' },
    'table_saw': { name: 'Table Saw', watts: 1800, category: 'Workshop' },
    'circular_saw': { name: 'Circular Saw', watts: 1400, category: 'Workshop' },
    'drill_press': { name: 'Drill Press', watts: 800, category: 'Workshop' },
    'angle_grinder': { name: 'Angle Grinder', watts: 1200, category: 'Workshop' },
    'welder_small': { name: 'Small Arc Welder', watts: 3000, category: 'Workshop' },
    'welder_large': { name: 'Large Arc Welder', watts: 7000, category: 'Workshop' },

    // Outdoor & Garden
    'lawn_mower_electric': { name: 'Electric Lawn Mower', watts: 1200, category: 'Outdoor' },
    'leaf_blower': { name: 'Electric Leaf Blower', watts: 1000, category: 'Outdoor' },
    'hedge_trimmer': { name: 'Electric Hedge Trimmer', watts: 400, category: 'Outdoor' },
    'chainsaw_electric': { name: 'Electric Chainsaw', watts: 1800, category: 'Outdoor' },
    'string_trimmer': { name: 'Electric String Trimmer', watts: 300, category: 'Outdoor' },
    'electric_grill': { name: 'Electric Grill', watts: 1650, category: 'Outdoor' },

    // Specific Brand/Model TVs (Popular Models)
    'samsung_qn90a_55': { name: 'Samsung QN90A 55" QLED (2021)', watts: 120, category: 'Entertainment' },
    'samsung_qn90a_65': { name: 'Samsung QN90A 65" QLED (2021)', watts: 180, category: 'Entertainment' },
    'lg_c1_55': { name: 'LG C1 55" OLED (2021)', watts: 120, category: 'Entertainment' },
    'lg_c1_65': { name: 'LG C1 65" OLED (2021)', watts: 180, category: 'Entertainment' },
    'sony_x90j_55': { name: 'Sony X90J 55" LED (2021)', watts: 105, category: 'Entertainment' },
    'tcl_6series_55': { name: 'TCL 6-Series 55" QLED', watts: 95, category: 'Entertainment' },
    'vizio_p65q9_65': { name: 'Vizio P65Q9-H1 65" Quantum', watts: 155, category: 'Entertainment' },
    'samsung_tu7000_43': { name: 'Samsung TU7000 43" 4K (Budget)', watts: 75, category: 'Entertainment' },
    'roku_tcl_32': { name: 'TCL 32" Roku TV', watts: 55, category: 'Entertainment' },

    // Specific Refrigerator Models
    'whirlpool_wrf757sdhz': { name: 'Whirlpool WRF757SDHZ French Door (2023)', watts: 110, category: 'Kitchen' },
    'ge_gfe28gmkbes': { name: 'GE GFE28GMKBES French Door (Energy Star)', watts: 105, category: 'Kitchen' },
    'frigidaire_ffhb2750ts': { name: 'Frigidaire FFHB2750TS French Door', watts: 115, category: 'Kitchen' },
    'samsung_rf23m8070sr': { name: 'Samsung RF23M8070SR 4-Door Flex', watts: 125, category: 'Kitchen' },
    'lg_lmxs30776s': { name: 'LG LMXS30776S InstaView Door-in-Door', watts: 130, category: 'Kitchen' },
    'kenmore_70343': { name: 'Kenmore 70343 Side-by-Side', watts: 145, category: 'Kitchen' },
    'maytag_mfi2570fez': { name: 'Maytag MFI2570FEZ French Door', watts: 120, category: 'Kitchen' },
    'ge_vintage_1980s': { name: 'GE Side-by-Side (1980s-1990s)', watts: 250, category: 'Kitchen' },
    'whirlpool_vintage_1970s': { name: 'Whirlpool Top-Freezer (1970s-1980s)', watts: 300, category: 'Kitchen' },
    'frigidaire_vintage_1960s': { name: 'Frigidaire Classic (1960s-1970s)', watts: 400, category: 'Kitchen' },

    // Specific Washing Machine Models
    'lg_wm3900hwa': { name: 'LG WM3900HWA Front Load (2023)', watts: 350, category: 'Laundry' },
    'samsung_wf45k6500av': { name: 'Samsung WF45K6500AV AddWash Front Load', watts: 380, category: 'Laundry' },
    'whirlpool_wtw7120hw': { name: 'Whirlpool WTW7120HW Top Load HE', watts: 420, category: 'Laundry' },
    'ge_gtw465asnww': { name: 'GE GTW465ASNWW Top Load (Budget)', watts: 480, category: 'Laundry' },
    'maytag_mvwc565fw': { name: 'Maytag MVWC565FW Top Load Commercial', watts: 520, category: 'Laundry' },
    'speed_queen_tc5000wn': { name: 'Speed Queen TC5000WN Top Load', watts: 550, category: 'Laundry' },
    'kenmore_vintage_1990s': { name: 'Kenmore Top Load (1990s)', watts: 650, category: 'Laundry' },
    'whirlpool_vintage_1980s': { name: 'Whirlpool Heavy Duty (1980s)', watts: 750, category: 'Laundry' },

    // Specific Dryer Models
    'lg_dlex3900w': { name: 'LG DLEX3900W Electric Front Load (2023)', watts: 2800, category: 'Laundry' },
    'samsung_dv45k6500ev': { name: 'Samsung DV45K6500EV Electric w/ Steam', watts: 2900, category: 'Laundry' },
    'whirlpool_wed7120hw': { name: 'Whirlpool WED7120HW Electric', watts: 3200, category: 'Laundry' },
    'ge_gtd42easjws': { name: 'GE GTD42EASJWS Electric (Budget)', watts: 3400, category: 'Laundry' },
    'maytag_medc465hw': { name: 'Maytag MEDC465HW Electric', watts: 3100, category: 'Laundry' },
    'kenmore_electric_vintage': { name: 'Kenmore Electric Dryer (1990s)', watts: 3800, category: 'Laundry' },

    // Specific Computer Models
    'macbook_pro_16_2023': { name: 'MacBook Pro 16" M2 Max (2023)', watts: 70, category: 'Computing' },
    'macbook_air_13_2023': { name: 'MacBook Air 13" M2 (2023)', watts: 30, category: 'Computing' },
    'dell_xps_13_9320': { name: 'Dell XPS 13 9320', watts: 45, category: 'Computing' },
    'lenovo_thinkpad_x1': { name: 'Lenovo ThinkPad X1 Carbon', watts: 55, category: 'Computing' },
    'hp_spectre_x360': { name: 'HP Spectre x360', watts: 50, category: 'Computing' },
    'surface_laptop_5': { name: 'Microsoft Surface Laptop 5', watts: 40, category: 'Computing' },
    'razer_blade_15': { name: 'Razer Blade 15 Gaming Laptop', watts: 180, category: 'Computing' },
    'asus_rog_strix': { name: 'ASUS ROG Strix Gaming Laptop', watts: 170, category: 'Computing' },
    'alienware_m15_r7': { name: 'Alienware m15 R7 Gaming', watts: 200, category: 'Computing' },
    'imac_24_2021': { name: 'iMac 24" M1 (2021)', watts: 115, category: 'Computing' },
    'imac_27_intel': { name: 'iMac 27" Intel (2020)', watts: 140, category: 'Computing' },
    'dell_optiplex_7090': { name: 'Dell OptiPlex 7090', watts: 135, category: 'Computing' },
    'hp_prodesk_400': { name: 'HP ProDesk 400 G7', watts: 125, category: 'Computing' },

    // Specific Gaming Console Models
    'ps5_standard': { name: 'PlayStation 5 (Standard)', watts: 180, category: 'Gaming' },
    'ps5_digital': { name: 'PlayStation 5 Digital Edition', watts: 165, category: 'Gaming' },
    'xbox_series_x': { name: 'Xbox Series X', watts: 170, category: 'Gaming' },
    'xbox_series_s': { name: 'Xbox Series S', watts: 75, category: 'Gaming' },
    'nintendo_switch_oled': { name: 'Nintendo Switch OLED (Docked)', watts: 22, category: 'Gaming' },
    'nintendo_switch_lite': { name: 'Nintendo Switch Lite (Charging)', watts: 10, category: 'Gaming' },
    'ps4_pro': { name: 'PlayStation 4 Pro', watts: 180, category: 'Gaming' },
    'ps4_slim': { name: 'PlayStation 4 Slim', watts: 120, category: 'Gaming' },
    'xbox_one_x': { name: 'Xbox One X', watts: 170, category: 'Gaming' },
    'xbox_one_s': { name: 'Xbox One S', watts: 90, category: 'Gaming' },

    // Specific Air Conditioner Models
    'friedrich_chill_cp06g10b': { name: 'Friedrich Chill CP06G10B (6,000 BTU)', watts: 550, category: 'Climate' },
    'lg_lw6017r': { name: 'LG LW6017R Window AC (6,000 BTU)', watts: 520, category: 'Climate' },
    'ge_ahc08ly': { name: 'GE AHC08LY Window AC (8,000 BTU)', watts: 700, category: 'Climate' },
    'frigidaire_ffre1033u1': { name: 'Frigidaire FFRE1033U1 (10,000 BTU)', watts: 900, category: 'Climate' },
    'whynter_arc_14s': { name: 'Whynter ARC-14S Portable (14,000 BTU)', watts: 1250, category: 'Climate' },
    'black_decker_bpact08wt': { name: 'BLACK+DECKER BPACT08WT Portable', watts: 950, category: 'Climate' },
    'honeywell_mn10cesww': { name: 'Honeywell MN10CESWW Portable', watts: 1000, category: 'Climate' },

    // Specific Microwave Models
    'panasonic_nn_sn936b': { name: 'Panasonic NN-SN936B Inverter (2.2 cu ft)', watts: 1200, category: 'Kitchen' },
    'toshiba_ec042a5c_ss': { name: 'Toshiba EC042A5C-SS Countertop', watts: 1100, category: 'Kitchen' },
    'ge_jes2051snss': { name: 'GE JES2051SNSS Countertop', watts: 1050, category: 'Kitchen' },
    'sharp_r21lcfs': { name: 'Sharp R-21LCFS Carousel', watts: 1000, category: 'Kitchen' },
    'hamilton_beach_em031mzc_x1': { name: 'Hamilton Beach EM031MZC-X1 (Budget)', watts: 900, category: 'Kitchen' },
    'commercial_chef_chm009': { name: 'Commercial Chef CHM009 Compact', watts: 700, category: 'Kitchen' },

    // Specific Monitor Models
    'dell_s2722dc': { name: 'Dell S2722DC 27" USB-C', watts: 35, category: 'Computing' },
    'lg_27up850_w': { name: 'LG 27UP850-W 27" 4K', watts: 45, category: 'Computing' },
    'samsung_m7_32': { name: 'Samsung M7 32" Smart Monitor', watts: 55, category: 'Computing' },
    'asus_proart_pa329c': { name: 'ASUS ProArt PA329C 32" 4K', watts: 65, category: 'Computing' },
    'lg_34wn80c_b': { name: 'LG 34WN80C-B 34" Ultrawide', watts: 75, category: 'Computing' },
    'apple_studio_display': { name: 'Apple Studio Display 27"', watts: 89, category: 'Computing' },
    'dell_u4021qw': { name: 'Dell U4021QW 40" Curved Ultrawide', watts: 115, category: 'Computing' },

    // Home Theater & Audio Systems
    'sonos_arc': { name: 'Sonos Arc Soundbar', watts: 100, category: 'Entertainment' },
    'bose_smart_soundbar_900': { name: 'Bose Smart Soundbar 900', watts: 120, category: 'Entertainment' },
    'yamaha_yas_209': { name: 'Yamaha YAS-209 Soundbar', watts: 60, category: 'Entertainment' },
    'jbl_bar_5_1': { name: 'JBL Bar 5.1 Surround', watts: 250, category: 'Entertainment' },
    'denon_avr_x3700h': { name: 'Denon AVR-X3700H Receiver', watts: 200, category: 'Entertainment' },
    'onkyo_tx_nr696': { name: 'Onkyo TX-NR696 7.2 Receiver', watts: 180, category: 'Entertainment' },
    'klipsch_reference_theater': { name: 'Klipsch Reference Theater Pack', watts: 300, category: 'Entertainment' }
};

const userAppliances = [];
const scenarioAppliances = [];

let applianceIdCounter = 1;
let isScenarioModeActive = false;

let filteredAppliances = { ...applianceDatabase };

// Error handling and validation
function showError(message, elementId = null) {
    // Remove existing error messages
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded mb-4';
    errorDiv.textContent = message;
    
    if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.parentNode.insertBefore(errorDiv, element.nextSibling);
        }
    } else {
        // Show at top of main content
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.insertBefore(errorDiv, mainContent.firstChild);
        }
    }
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.parentNode.removeChild(errorDiv);
        }
    }, 5000);
}

function validateInput(value, min = 0, max = Infinity, fieldName = 'Value') {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
        throw new Error(`${fieldName} must be a valid number`);
    }
    if (numValue < min) {
        throw new Error(`${fieldName} must be at least ${min}`);
    }
    if (numValue > max) {
        throw new Error(`${fieldName} must be no more than ${max}`);
    }
    return numValue;
}

function validateApplianceData(appliance) {
    if (!appliance.name || appliance.name.trim() === '') {
        throw new Error('Appliance name is required');
    }
    if (!appliance.watts || isNaN(appliance.watts) || appliance.watts <= 0) {
        throw new Error('Appliance wattage must be a positive number');
    }
    if (!appliance.hoursPerDay || isNaN(appliance.hoursPerDay) || appliance.hoursPerDay < 0 || appliance.hoursPerDay > 24) {
        throw new Error('Hours per day must be between 0 and 24');
    }
    return true;
}

// Data persistence functions
function saveData() {
    try {
        const data = {
            userAppliances: userAppliances,
            scenarioAppliances: scenarioAppliances,
            applianceIdCounter: applianceIdCounter,
            electricityRate: document.getElementById('electricity-rate').value,
            timeOfUseRates: document.getElementById('time-of-use-rates').checked,
            peakRate: document.getElementById('peak-rate').value,
            offPeakRate: document.getElementById('off-peak-rate').value,
            carbonIntensity: document.getElementById('carbon-intensity').value
        };
        localStorage.setItem('energyFootprintData', JSON.stringify(data));
    } catch (error) {
        console.error('Error saving data:', error);
        showError('Failed to save data. Please try again.');
    }
}

function loadData() {
    const savedData = localStorage.getItem('energyFootprintData');
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            userAppliances.length = 0;
            userAppliances.push(...(data.userAppliances || []));
            scenarioAppliances.length = 0;
            scenarioAppliances.push(...(data.scenarioAppliances || []));
            applianceIdCounter = data.applianceIdCounter || 1;
            
            if (data.electricityRate) {
                document.getElementById('electricity-rate').value = data.electricityRate;
            }
            if (data.timeOfUseRates !== undefined) {
                document.getElementById('time-of-use-rates').checked = data.timeOfUseRates;
                toggleTimeOfUseSettings();
            }
            if (data.peakRate) {
                document.getElementById('peak-rate').value = data.peakRate;
            }
            if (data.offPeakRate) {
                document.getElementById('off-peak-rate').value = data.offPeakRate;
            }
            if (data.carbonIntensity) {
                document.getElementById('carbon-intensity').value = data.carbonIntensity;
            }
        } catch (error) {
            console.error('Error loading saved data:', error);
        }
    }
}

function clearData() {
    if (confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
        localStorage.removeItem('energyFootprintData');
        userAppliances.length = 0;
        scenarioAppliances.length = 0;
        applianceIdCounter = 1;
        document.getElementById('electricity-rate').value = '0.15';
        renderDashboard();
        renderScenarioDashboard();
        updateSavingsSummary();
    }
}

// Export/Import functions
function exportData() {
    const data = {
        userAppliances: userAppliances,
        scenarioAppliances: scenarioAppliances,
        applianceIdCounter: applianceIdCounter,
        electricityRate: document.getElementById('electricity-rate').value,
        exportDate: new Date().toISOString(),
        version: '1.0'
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `energy-footprint-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function importData(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.version && data.userAppliances) {
                // Clear current data
                userAppliances.length = 0;
                scenarioAppliances.length = 0;
                
                // Import new data
                userAppliances.push(...(data.userAppliances || []));
                scenarioAppliances.push(...(data.scenarioAppliances || []));
                applianceIdCounter = data.applianceIdCounter || 1;
                
                if (data.electricityRate) {
                    document.getElementById('electricity-rate').value = data.electricityRate;
                }
                
                // Update displays
                renderDashboard();
                renderScenarioDashboard();
                updateSavingsSummary();
                saveData();
                
                alert('Data imported successfully!');
            } else {
                alert('Invalid file format. Please select a valid Energy Footprint export file.');
            }
        } catch (error) {
            console.error('Error importing data:', error);
            alert('Error importing data. Please check the file format.');
        }
    };
    reader.readAsText(file);
}

// Advanced calculation functions
function toggleTimeOfUseSettings() {
    const checkbox = document.getElementById('time-of-use-rates');
    const settings = document.getElementById('time-of-use-settings');
    
    if (checkbox.checked) {
        settings.classList.remove('hidden');
    } else {
        settings.classList.add('hidden');
    }
}

function calculateAdvancedCosts(appliances) {
    const electricityRate = parseFloat(document.getElementById('electricity-rate').value) || 0.15;
    const timeOfUseRates = document.getElementById('time-of-use-rates').checked;
    const peakRate = parseFloat(document.getElementById('peak-rate').value) || 0.25;
    const offPeakRate = parseFloat(document.getElementById('off-peak-rate').value) || 0.10;
    const carbonIntensity = parseFloat(document.getElementById('carbon-intensity').value) || 0.4;
    
    let totalCost = 0;
    let totalCarbon = 0;
    let totalKwh = 0;
    
    appliances.forEach(appliance => {
        const monthlyKwh = (appliance.watts * appliance.hoursPerDay * 30) / 1000;
        totalKwh += monthlyKwh;
        
        let monthlyCost;
        if (timeOfUseRates) {
            // Assume 20% of usage is during peak hours (6PM-10PM)
            const peakKwh = monthlyKwh * 0.2;
            const offPeakKwh = monthlyKwh * 0.8;
            monthlyCost = (peakKwh * peakRate) + (offPeakKwh * offPeakRate);
        } else {
            monthlyCost = monthlyKwh * electricityRate;
        }
        
        totalCost += monthlyCost;
    });
    
    totalCarbon = totalKwh * carbonIntensity;
    
    return {
        totalCost: totalCost,
        totalCarbon: totalCarbon,
        totalKwh: totalKwh
    };
}

// Reporting functions
let categoryChart = null;
let costChart = null;

function showReports() {
    document.getElementById('dashboard-section').classList.add('hidden');
    document.getElementById('reports-section').classList.remove('hidden');
    generateReports();
}

function hideReports() {
    document.getElementById('reports-section').classList.add('hidden');
    document.getElementById('dashboard-section').classList.remove('hidden');
}

function generateReports() {
    generateCategoryChart();
    generateCostChart();
    generateRecommendations();
}

function generateCategoryChart() {
    const ctx = document.getElementById('category-chart').getContext('2d');
    
    // Destroy existing chart if it exists
    if (categoryChart) {
        categoryChart.destroy();
    }
    
    // Calculate usage by category
    const categoryData = {};
    const categoryCosts = {};
    
    userAppliances.forEach(appliance => {
        const monthlyKwh = (appliance.watts * appliance.hoursPerDay * 30) / 1000;
        const electricityRate = parseFloat(document.getElementById('electricity-rate').value) || 0.15;
        const timeOfUseRates = document.getElementById('time-of-use-rates').checked;
        const peakRate = parseFloat(document.getElementById('peak-rate').value) || 0.25;
        const offPeakRate = parseFloat(document.getElementById('off-peak-rate').value) || 0.10;
        
        let monthlyCost;
        if (timeOfUseRates) {
            const peakKwh = monthlyKwh * 0.2;
            const offPeakKwh = monthlyKwh * 0.8;
            monthlyCost = (peakKwh * peakRate) + (offPeakKwh * offPeakRate);
        } else {
            monthlyCost = monthlyKwh * electricityRate;
        }
        
        if (!categoryData[appliance.category]) {
            categoryData[appliance.category] = 0;
            categoryCosts[appliance.category] = 0;
        }
        categoryData[appliance.category] += monthlyKwh;
        categoryCosts[appliance.category] += monthlyCost;
    });
    
    const categories = Object.keys(categoryData);
    const kwhData = categories.map(cat => categoryData[cat]);
    const costData = categories.map(cat => categoryCosts[cat]);
    
    categoryChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: categories,
            datasets: [{
                data: kwhData,
                backgroundColor: [
                    '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',
                    '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'
                ],
                borderWidth: 2,
                borderColor: '#374151'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#d1d5db'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const category = context.label;
                            const kwh = context.parsed;
                            const cost = costData[context.dataIndex];
                            return `${category}: ${kwh.toFixed(1)} kWh ($${cost.toFixed(2)})`;
                        }
                    }
                }
            }
        }
    });
}

function generateCostChart() {
    const ctx = document.getElementById('cost-chart').getContext('2d');
    
    // Destroy existing chart if it exists
    if (costChart) {
        costChart.destroy();
    }
    
    // Calculate top 10 appliances by cost
    const applianceCosts = userAppliances.map(appliance => {
        const monthlyKwh = (appliance.watts * appliance.hoursPerDay * 30) / 1000;
        const electricityRate = parseFloat(document.getElementById('electricity-rate').value) || 0.15;
        const timeOfUseRates = document.getElementById('time-of-use-rates').checked;
        const peakRate = parseFloat(document.getElementById('peak-rate').value) || 0.25;
        const offPeakRate = parseFloat(document.getElementById('off-peak-rate').value) || 0.10;
        
        let monthlyCost;
        if (timeOfUseRates) {
            const peakKwh = monthlyKwh * 0.2;
            const offPeakKwh = monthlyKwh * 0.8;
            monthlyCost = (peakKwh * peakRate) + (offPeakKwh * offPeakRate);
        } else {
            monthlyCost = monthlyKwh * electricityRate;
        }
        
        return {
            name: appliance.name,
            cost: monthlyCost
        };
    }).sort((a, b) => b.cost - a.cost).slice(0, 10);
    
    const names = applianceCosts.map(item => item.name.length > 20 ? item.name.substring(0, 20) + '...' : item.name);
    const costs = applianceCosts.map(item => item.cost);
    
    costChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: names,
            datasets: [{
                label: 'Monthly Cost ($)',
                data: costs,
                backgroundColor: '#06b6d4',
                borderColor: '#0891b2',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#d1d5db'
                    },
                    grid: {
                        color: '#4b5563'
                    }
                },
                x: {
                    ticks: {
                        color: '#d1d5db',
                        maxRotation: 45
                    },
                    grid: {
                        color: '#4b5563'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#d1d5db'
                    }
                }
            }
        }
    });
}

function generateRecommendations() {
    const recommendationsList = document.getElementById('recommendations-list');
    const recommendations = [];
    
    // Analyze appliances for recommendations
    userAppliances.forEach(appliance => {
        const monthlyKwh = (appliance.watts * appliance.hoursPerDay * 30) / 1000;
        const electricityRate = parseFloat(document.getElementById('electricity-rate').value) || 0.15;
        const monthlyCost = monthlyKwh * electricityRate;
        
        // High energy usage recommendations
        if (monthlyKwh > 100) {
            recommendations.push({
                type: 'warning',
                title: `High Energy Usage: ${appliance.name}`,
                message: `This appliance uses ${monthlyKwh.toFixed(1)} kWh/month ($${monthlyCost.toFixed(2)}). Consider reducing usage or upgrading to a more efficient model.`
            });
        }
        
        // Old appliance recommendations
        if (appliance.name.toLowerCase().includes('old') || appliance.name.toLowerCase().includes('vintage')) {
            recommendations.push({
                type: 'info',
                title: `Consider Upgrading: ${appliance.name}`,
                message: `Older appliances are typically less energy efficient. A modern replacement could save you money over time.`
            });
        }
        
        // High wattage recommendations
        if (appliance.watts > 1000) {
            recommendations.push({
                type: 'warning',
                title: `High Power Appliance: ${appliance.name}`,
                message: `This appliance uses ${appliance.watts}W. Consider using it during off-peak hours if you have time-of-use rates.`
            });
        }
    });
    
    // General recommendations
    if (userAppliances.length > 0) {
        const totalKwh = userAppliances.reduce((sum, appliance) => {
            return sum + (appliance.watts * appliance.hoursPerDay * 30) / 1000;
        }, 0);
        
        if (totalKwh > 500) {
            recommendations.push({
                type: 'success',
                title: 'Overall Energy Usage',
                message: `Your total monthly usage is ${totalKwh.toFixed(1)} kWh. Consider implementing energy-saving habits like turning off lights and unplugging unused devices.`
            });
        }
    }
    
    // Display recommendations
    if (recommendations.length === 0) {
        recommendationsList.innerHTML = '<p class="text-gray-400 text-center py-4">No specific recommendations at this time. Your energy usage looks efficient!</p>';
    } else {
        recommendationsList.innerHTML = recommendations.map(rec => `
            <div class="bg-gray-600 rounded-lg p-4 border-l-4 ${rec.type === 'warning' ? 'border-red-500' : rec.type === 'info' ? 'border-blue-500' : 'border-green-500'}">
                <h4 class="font-semibold text-white mb-2">${rec.title}</h4>
                <p class="text-gray-300 text-sm">${rec.message}</p>
            </div>
        `).join('');
    }
}

function populateApplianceDropdown(appliances = applianceDatabase) {
    const selectElement = document.getElementById('appliance-select');
    const resultsCount = document.getElementById('results-count');

    selectElement.innerHTML = '<option value="">Select an appliance...</option>';

    const entries = Object.entries(appliances);
    for (const [key, appliance] of entries) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = `${appliance.name} (${appliance.watts}W)`;
        selectElement.appendChild(option);
    }

    resultsCount.textContent = `${entries.length} appliances found`;
}

function filterAppliances() {
    const searchTerm = document.getElementById('appliance-search').value.toLowerCase();
    const selectedCategory = document.getElementById('category-filter').value;

    filteredAppliances = {};

    for (const [key, appliance] of Object.entries(applianceDatabase)) {
        const matchesSearch = appliance.name.toLowerCase().includes(searchTerm);
        const matchesCategory = !selectedCategory || appliance.category === selectedCategory;

        if (matchesSearch && matchesCategory) {
            filteredAppliances[key] = appliance;
        }
    }

    populateApplianceDropdown(filteredAppliances);
}

function renderDashboard() {
    const appliancesList = document.getElementById('appliances-list');
    const totalCostElement = document.getElementById('total-cost');
    const totalCarbonElement = document.getElementById('total-carbon');

    if (userAppliances.length === 0) {
        appliancesList.innerHTML = '<p class="text-gray-400 text-center py-8">No appliances added yet. Select an appliance from the control panel to get started!</p>';
        totalCostElement.textContent = '$0.00';
        totalCarbonElement.textContent = '0.0 kg';
        return;
    }

    const calculations = calculateAdvancedCosts(userAppliances);
    appliancesList.innerHTML = '';

    userAppliances.forEach(appliance => {
        const monthlyKwh = (appliance.watts * appliance.hoursPerDay * 30) / 1000;
        const electricityRate = parseFloat(document.getElementById('electricity-rate').value) || 0.15;
        const timeOfUseRates = document.getElementById('time-of-use-rates').checked;
        const peakRate = parseFloat(document.getElementById('peak-rate').value) || 0.25;
        const offPeakRate = parseFloat(document.getElementById('off-peak-rate').value) || 0.10;
        
        let monthlyCost;
        if (timeOfUseRates) {
            const peakKwh = monthlyKwh * 0.2;
            const offPeakKwh = monthlyKwh * 0.8;
            monthlyCost = (peakKwh * peakRate) + (offPeakKwh * offPeakRate);
        } else {
            monthlyCost = monthlyKwh * electricityRate;
        }

        const applianceDiv = document.createElement('div');
        applianceDiv.className = 'bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all hover:shadow-lg mb-4';

        const mainContent = document.createElement('div');
        mainContent.className = 'flex justify-between items-center';

        // Left Side - Appliance Name
        const leftSide = document.createElement('div');
        leftSide.className = 'flex-1';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'text-lg font-semibold text-white';
        nameSpan.textContent = appliance.name;

        const wattsSpan = document.createElement('span');
        wattsSpan.className = 'text-sm text-gray-500 ml-2';
        wattsSpan.textContent = `(${appliance.watts}W)`;

        leftSide.appendChild(nameSpan);
        leftSide.appendChild(wattsSpan);

        // Right Side - Cost and Controls
        const rightSide = document.createElement('div');
        rightSide.className = 'flex flex-col items-end gap-2';

        // Monthly Cost - Most prominent
        const costDiv = document.createElement('div');
        costDiv.className = 'text-right';

        const costSpan = document.createElement('span');
        costSpan.className = 'text-cyan-300 font-bold text-2xl';
        costSpan.textContent = `$${monthlyCost.toFixed(2)}`;

        const perMonthSpan = document.createElement('span');
        perMonthSpan.className = 'text-gray-500 text-sm ml-1';
        perMonthSpan.textContent = '/mo';

        costDiv.appendChild(costSpan);
        costDiv.appendChild(perMonthSpan);

        // Controls Container
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'flex items-center gap-3';

        // Hours Input Container
        const hoursContainer = document.createElement('div');
        hoursContainer.className = 'flex items-center gap-1 bg-gray-700 rounded px-2 py-1';

        const hoursInput = document.createElement('input');
        hoursInput.type = 'number';
        hoursInput.value = appliance.hoursPerDay;
        hoursInput.min = '0';
        hoursInput.max = '24';
        hoursInput.step = '0.5';
        hoursInput.className = 'bg-transparent text-white w-12 text-center focus:outline-none';
        hoursInput.dataset.applianceId = appliance.id;

        const hoursLabel = document.createElement('span');
        hoursLabel.className = 'text-xs text-gray-400';
        hoursLabel.textContent = 'hrs/day';

        hoursInput.addEventListener('change', function() {
            try {
                const newHours = validateInput(this.value, 0, 24, 'Hours per day');
                const applianceToUpdate = userAppliances.find(a => a.id === parseInt(this.dataset.applianceId));
                if (applianceToUpdate) {
                    applianceToUpdate.hoursPerDay = newHours;
                    renderDashboard();
                    saveData();
                }
            } catch (error) {
                showError(error.message, this.id);
                this.value = userAppliances.find(a => a.id === parseInt(this.dataset.applianceId))?.hoursPerDay || 0;
            }
        });

        hoursContainer.appendChild(hoursInput);
        hoursContainer.appendChild(hoursLabel);

        // Remove Button - Subtle X
        const removeButton = document.createElement('button');
        removeButton.className = 'text-red-400 hover:text-red-300 hover:bg-red-900/30 rounded p-1 transition-all';
        removeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>`;
        removeButton.title = 'Remove appliance';
        removeButton.dataset.applianceId = appliance.id;

        removeButton.addEventListener('click', function() {
            const idToRemove = parseInt(this.dataset.applianceId);
            const index = userAppliances.findIndex(a => a.id === idToRemove);
            if (index !== -1) {
                userAppliances.splice(index, 1);
                renderDashboard();
                saveData();
            }
        });

        controlsDiv.appendChild(hoursContainer);
        controlsDiv.appendChild(removeButton);

        rightSide.appendChild(costDiv);
        rightSide.appendChild(controlsDiv);

        mainContent.appendChild(leftSide);
        mainContent.appendChild(rightSide);

        applianceDiv.appendChild(mainContent);
        appliancesList.appendChild(applianceDiv);
    });

    totalCostElement.textContent = `$${calculations.totalCost.toFixed(2)}`;
    totalCarbonElement.textContent = `${calculations.totalCarbon.toFixed(1)} kg`;
}

function renderScenarioDashboard() {
    const scenarioAppliancesList = document.getElementById('scenario-appliances-list');

    if (scenarioAppliances.length === 0) {
        scenarioAppliancesList.innerHTML = '<p class="text-gray-400 text-center py-8">Add appliances to your new plan to see potential savings!</p>';
        return;
    }

    scenarioAppliancesList.innerHTML = '';

    scenarioAppliances.forEach(appliance => {
        const monthlyKwh = (appliance.watts * appliance.hoursPerDay * 30) / 1000;
        const electricityRate = parseFloat(document.getElementById('electricity-rate').value) || 0.15;
        const timeOfUseRates = document.getElementById('time-of-use-rates').checked;
        const peakRate = parseFloat(document.getElementById('peak-rate').value) || 0.25;
        const offPeakRate = parseFloat(document.getElementById('off-peak-rate').value) || 0.10;
        
        let monthlyCost;
        if (timeOfUseRates) {
            const peakKwh = monthlyKwh * 0.2;
            const offPeakKwh = monthlyKwh * 0.8;
            monthlyCost = (peakKwh * peakRate) + (offPeakKwh * offPeakRate);
        } else {
            monthlyCost = monthlyKwh * electricityRate;
        }

        const applianceDiv = document.createElement('div');
        applianceDiv.className = 'bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all hover:shadow-lg mb-4';

        const mainContent = document.createElement('div');
        mainContent.className = 'flex justify-between items-center';

        // Left Side - Appliance Name
        const leftSide = document.createElement('div');
        leftSide.className = 'flex-1';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'text-lg font-semibold text-white';
        nameSpan.textContent = appliance.name;

        const wattsSpan = document.createElement('span');
        wattsSpan.className = 'text-sm text-gray-500 ml-2';
        wattsSpan.textContent = `(${appliance.watts}W)`;

        leftSide.appendChild(nameSpan);
        leftSide.appendChild(wattsSpan);

        // Right Side - Cost and Controls
        const rightSide = document.createElement('div');
        rightSide.className = 'flex flex-col items-end gap-2';

        // Monthly Cost - Most prominent
        const costDiv = document.createElement('div');
        costDiv.className = 'text-right';

        const costSpan = document.createElement('span');
        costSpan.className = 'text-cyan-300 font-bold text-2xl';
        costSpan.textContent = `$${monthlyCost.toFixed(2)}`;

        const perMonthSpan = document.createElement('span');
        perMonthSpan.className = 'text-gray-500 text-sm ml-1';
        perMonthSpan.textContent = '/mo';

        costDiv.appendChild(costSpan);
        costDiv.appendChild(perMonthSpan);

        // Controls Container
        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'flex items-center gap-3';

        // Hours Input Container
        const hoursContainer = document.createElement('div');
        hoursContainer.className = 'flex items-center gap-1 bg-gray-700 rounded px-2 py-1';

        const hoursInput = document.createElement('input');
        hoursInput.type = 'number';
        hoursInput.value = appliance.hoursPerDay;
        hoursInput.min = '0';
        hoursInput.max = '24';
        hoursInput.step = '0.5';
        hoursInput.className = 'bg-transparent text-white w-12 text-center focus:outline-none';
        hoursInput.dataset.applianceId = appliance.id;

        const hoursLabel = document.createElement('span');
        hoursLabel.className = 'text-xs text-gray-400';
        hoursLabel.textContent = 'hrs/day';

        hoursInput.addEventListener('change', function() {
            try {
                const newHours = validateInput(this.value, 0, 24, 'Hours per day');
                const applianceToUpdate = scenarioAppliances.find(a => a.id === parseInt(this.dataset.applianceId));
                if (applianceToUpdate) {
                    applianceToUpdate.hoursPerDay = newHours;
                    renderScenarioDashboard();
                    updateSavingsSummary();
                    saveData();
                }
            } catch (error) {
                showError(error.message, this.id);
                this.value = scenarioAppliances.find(a => a.id === parseInt(this.dataset.applianceId))?.hoursPerDay || 0;
            }
        });

        hoursContainer.appendChild(hoursInput);
        hoursContainer.appendChild(hoursLabel);

        // Remove Button - Subtle X
        const removeButton = document.createElement('button');
        removeButton.className = 'text-red-400 hover:text-red-300 hover:bg-red-900/30 rounded p-1 transition-all';
        removeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>`;
        removeButton.title = 'Remove appliance';
        removeButton.dataset.applianceId = appliance.id;

        removeButton.addEventListener('click', function() {
            const idToRemove = parseInt(this.dataset.applianceId);
            const index = scenarioAppliances.findIndex(a => a.id === idToRemove);
            if (index !== -1) {
                scenarioAppliances.splice(index, 1);
                renderScenarioDashboard();
                updateSavingsSummary();
                saveData();
            }
        });

        controlsDiv.appendChild(hoursContainer);
        controlsDiv.appendChild(removeButton);

        rightSide.appendChild(costDiv);
        rightSide.appendChild(controlsDiv);

        mainContent.appendChild(leftSide);
        mainContent.appendChild(rightSide);

        applianceDiv.appendChild(mainContent);
        scenarioAppliancesList.appendChild(applianceDiv);
    });
}

function updateSavingsSummary() {
    // Calculate current cost and carbon
    const currentCalculations = calculateAdvancedCosts(userAppliances);
    const scenarioCalculations = calculateAdvancedCosts(scenarioAppliances);

    // Calculate savings
    const monthlySavings = currentCalculations.totalCost - scenarioCalculations.totalCost;
    const yearlySavings = monthlySavings * 12;
    const carbonSavings = currentCalculations.totalCarbon - scenarioCalculations.totalCarbon;

    // Update display elements
    document.getElementById('current-cost-display').textContent = `$${currentCalculations.totalCost.toFixed(2)}`;
    document.getElementById('new-cost-display').textContent = `$${scenarioCalculations.totalCost.toFixed(2)}`;
    document.getElementById('monthly-savings-display').textContent = `$${monthlySavings.toFixed(2)}`;
    document.getElementById('yearly-savings-display').textContent = `$${yearlySavings.toFixed(2)} per year`;

    // Change color based on savings (green for savings, red for increased cost)
    const monthlySavingsElement = document.getElementById('monthly-savings-display');
    if (monthlySavings > 0) {
        monthlySavingsElement.className = 'text-2xl font-bold text-green-400';
    } else if (monthlySavings < 0) {
        monthlySavingsElement.className = 'text-2xl font-bold text-red-400';
    } else {
        monthlySavingsElement.className = 'text-2xl font-bold text-gray-400';
    }
}

function toggleScenarioMode() {
    isScenarioModeActive = !isScenarioModeActive;
    console.log('Scenario mode active:', isScenarioModeActive);

    const toggleButton = document.getElementById('toggle-scenario-btn');
    const currentDashboard = document.getElementById('current-dashboard');
    const scenarioDashboard = document.getElementById('scenario-dashboard');
    const savingsSummary = document.getElementById('savings-summary');

    if (isScenarioModeActive) {
        // Activate scenario mode
        scenarioAppliances.length = 0;
        if (userAppliances.length > 0) {
            scenarioAppliances.push(...JSON.parse(JSON.stringify(userAppliances)));
        }

        // Update layout
        currentDashboard.classList.remove('lg:col-span-3');
        currentDashboard.classList.add('lg:col-span-1');
        scenarioDashboard.classList.remove('hidden');
        savingsSummary.classList.remove('hidden');

        // Update button text
        toggleButton.textContent = 'Cancel Plan';

        // Render both dashboards
        renderDashboard();
        renderScenarioDashboard();
        updateSavingsSummary();
    } else {
        // Deactivate scenario mode
        currentDashboard.classList.remove('lg:col-span-1');
        currentDashboard.classList.add('lg:col-span-3');
        scenarioDashboard.classList.add('hidden');
        savingsSummary.classList.add('hidden');

        // Update button text
        toggleButton.textContent = 'Plan My Savings';

        // Render current dashboard
        renderDashboard();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    populateApplianceDropdown();

    const addButton = document.getElementById('add-appliance-btn');
    const selectElement = document.getElementById('appliance-select');
    const electricityRateInput = document.getElementById('electricity-rate');
    const toggleScenarioButton = document.getElementById('toggle-scenario-btn');
    const searchInput = document.getElementById('appliance-search');
    const categoryFilter = document.getElementById('category-filter');

    // Search and filter event listeners
    searchInput.addEventListener('input', filterAppliances);
    categoryFilter.addEventListener('change', filterAppliances);

    addButton.addEventListener('click', function() {
        const selectedKey = selectElement.value;

        if (selectedKey && applianceDatabase[selectedKey]) {
            const appliance = applianceDatabase[selectedKey];

            const newAppliance = {
                id: applianceIdCounter++,
                name: appliance.name,
                watts: appliance.watts,
                hoursPerDay: 4
            };

            if (isScenarioModeActive) {
                scenarioAppliances.push(newAppliance);
                renderScenarioDashboard();
                updateSavingsSummary();
            } else {
                userAppliances.push(newAppliance);
                renderDashboard();
            }

            selectElement.value = '';
            saveData();
        }
    });

    electricityRateInput.addEventListener('change', function() {
        try {
            validateInput(this.value, 0, 10, 'Electricity rate');
            if (userAppliances.length > 0 || scenarioAppliances.length > 0) {
                renderDashboard();
                if (isScenarioModeActive) {
                    renderScenarioDashboard();
                    updateSavingsSummary();
                }
            }
            saveData();
        } catch (error) {
            showError(error.message, this.id);
            this.value = '0.15';
        }
    });

    toggleScenarioButton.addEventListener('click', toggleScenarioMode);

    // Scenario control buttons
    const copyCurrentButton = document.getElementById('copy-current-btn');
    const clearScenarioButton = document.getElementById('clear-scenario-btn');
    const exportDataButton = document.getElementById('export-data-btn');
    const importDataInput = document.getElementById('import-data-input');
    const clearDataButton = document.getElementById('clear-data-btn');
    const timeOfUseCheckbox = document.getElementById('time-of-use-rates');
    const peakRateInput = document.getElementById('peak-rate');
    const offPeakRateInput = document.getElementById('off-peak-rate');
    const carbonIntensityInput = document.getElementById('carbon-intensity');
    const showReportsButton = document.getElementById('show-reports-btn');
    const hideReportsButton = document.getElementById('hide-reports-btn');

    // Data management event listeners
    exportDataButton.addEventListener('click', exportData);
    
    // Reports event listeners
    showReportsButton.addEventListener('click', showReports);
    hideReportsButton.addEventListener('click', hideReports);
    
    // Advanced settings event listeners
    timeOfUseCheckbox.addEventListener('change', function() {
        toggleTimeOfUseSettings();
        saveData();
        if (userAppliances.length > 0 || scenarioAppliances.length > 0) {
            renderDashboard();
            if (isScenarioModeActive) {
                renderScenarioDashboard();
                updateSavingsSummary();
            }
        }
    });
    
    peakRateInput.addEventListener('change', function() {
        try {
            validateInput(this.value, 0, 10, 'Peak rate');
            saveData();
            if (userAppliances.length > 0 || scenarioAppliances.length > 0) {
                renderDashboard();
                if (isScenarioModeActive) {
                    renderScenarioDashboard();
                    updateSavingsSummary();
                }
            }
        } catch (error) {
            showError(error.message, this.id);
            this.value = '0.25';
        }
    });
    
    offPeakRateInput.addEventListener('change', function() {
        try {
            validateInput(this.value, 0, 10, 'Off-peak rate');
            saveData();
            if (userAppliances.length > 0 || scenarioAppliances.length > 0) {
                renderDashboard();
                if (isScenarioModeActive) {
                    renderScenarioDashboard();
                    updateSavingsSummary();
                }
            }
        } catch (error) {
            showError(error.message, this.id);
            this.value = '0.10';
        }
    });
    
    carbonIntensityInput.addEventListener('change', function() {
        try {
            validateInput(this.value, 0, 5, 'Carbon intensity');
            saveData();
            if (userAppliances.length > 0 || scenarioAppliances.length > 0) {
                renderDashboard();
                if (isScenarioModeActive) {
                    renderScenarioDashboard();
                    updateSavingsSummary();
                }
            }
        } catch (error) {
            showError(error.message, this.id);
            this.value = '0.4';
        }
    });
    
    importDataInput.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            importData(e.target.files[0]);
            e.target.value = ''; // Reset file input
        }
    });
    
    clearDataButton.addEventListener('click', clearData);

    copyCurrentButton.addEventListener('click', function() {
        scenarioAppliances.length = 0;
        scenarioAppliances.push(...JSON.parse(JSON.stringify(userAppliances)));
        renderScenarioDashboard();
        updateSavingsSummary();
        saveData();
    });

    clearScenarioButton.addEventListener('click', function() {
        scenarioAppliances.length = 0;
        renderScenarioDashboard();
        updateSavingsSummary();
        saveData();
    });

    // Load saved data and initialize the display
    loadData();
    renderDashboard();
});