var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKABKOTA_LN_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKABKOTA_LN_50K_1 = format_ADMINISTRASIKABKOTA_LN_50K_1.readFeatures(json_ADMINISTRASIKABKOTA_LN_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKABKOTA_LN_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKABKOTA_LN_50K_1.addFeatures(features_ADMINISTRASIKABKOTA_LN_50K_1);
var lyr_ADMINISTRASIKABKOTA_LN_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKABKOTA_LN_50K_1, 
                style: style_ADMINISTRASIKABKOTA_LN_50K_1,
                popuplayertitle: "ADMINISTRASIKABKOTA_LN_50K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKABKOTA_LN_50K_1.png" /> ADMINISTRASIKABKOTA_LN_50K'
            });
var format_ADMINISTRASIKECAMATAN_AR_50K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_2 = format_ADMINISTRASIKECAMATAN_AR_50K_2.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_2.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_2);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_2, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_2,
                popuplayertitle: "ADMINISTRASIKECAMATAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_BANGUNAN_AR_50K_3 = new ol.format.GeoJSON();
var features_BANGUNAN_AR_50K_3 = format_BANGUNAN_AR_50K_3.readFeatures(json_BANGUNAN_AR_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_AR_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_AR_50K_3.addFeatures(features_BANGUNAN_AR_50K_3);
var lyr_BANGUNAN_AR_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_AR_50K_3, 
                style: style_BANGUNAN_AR_50K_3,
                popuplayertitle: "BANGUNAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_AR_50K_3.png" /> BANGUNAN_AR_50K'
            });
var format_ADMINISTRASIKABKOTA_AR_50K_4 = new ol.format.GeoJSON();
var features_ADMINISTRASIKABKOTA_AR_50K_4 = format_ADMINISTRASIKABKOTA_AR_50K_4.readFeatures(json_ADMINISTRASIKABKOTA_AR_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKABKOTA_AR_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKABKOTA_AR_50K_4.addFeatures(features_ADMINISTRASIKABKOTA_AR_50K_4);
var lyr_ADMINISTRASIKABKOTA_AR_50K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKABKOTA_AR_50K_4, 
                style: style_ADMINISTRASIKABKOTA_AR_50K_4,
                popuplayertitle: "ADMINISTRASIKABKOTA_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKABKOTA_AR_50K_4.png" /> ADMINISTRASIKABKOTA_AR_50K'
            });
var format_ADMINISTRASIKECAMATAN_LN_50K_5 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_LN_50K_5 = format_ADMINISTRASIKECAMATAN_LN_50K_5.readFeatures(json_ADMINISTRASIKECAMATAN_LN_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_LN_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_LN_50K_5.addFeatures(features_ADMINISTRASIKECAMATAN_LN_50K_5);
var lyr_ADMINISTRASIKECAMATAN_LN_50K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_LN_50K_5, 
                style: style_ADMINISTRASIKECAMATAN_LN_50K_5,
                popuplayertitle: "ADMINISTRASIKECAMATAN_LN_50K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_LN_50K_5.png" /> ADMINISTRASIKECAMATAN_LN_50K'
            });
var format_BANGUNAN_PT_50K_6 = new ol.format.GeoJSON();
var features_BANGUNAN_PT_50K_6 = format_BANGUNAN_PT_50K_6.readFeatures(json_BANGUNAN_PT_50K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_PT_50K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_PT_50K_6.addFeatures(features_BANGUNAN_PT_50K_6);
var lyr_BANGUNAN_PT_50K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_PT_50K_6, 
                style: style_BANGUNAN_PT_50K_6,
                popuplayertitle: "BANGUNAN_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_PT_50K_6.png" /> BANGUNAN_PT_50K'
            });
var format_JALAN_LN_50K_7 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_7 = format_JALAN_LN_50K_7.readFeatures(json_JALAN_LN_50K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_7.addFeatures(features_JALAN_LN_50K_7);
var lyr_JALAN_LN_50K_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_50K_7, 
                style: style_JALAN_LN_50K_7,
                popuplayertitle: "JALAN_LN_50K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_7.png" /> JALAN_LN_50K'
            });
var format_JEMBATAN_PT_50K_8 = new ol.format.GeoJSON();
var features_JEMBATAN_PT_50K_8 = format_JEMBATAN_PT_50K_8.readFeatures(json_JEMBATAN_PT_50K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEMBATAN_PT_50K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JEMBATAN_PT_50K_8.addFeatures(features_JEMBATAN_PT_50K_8);
var lyr_JEMBATAN_PT_50K_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JEMBATAN_PT_50K_8, 
                style: style_JEMBATAN_PT_50K_8,
                popuplayertitle: "JEMBATAN_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/JEMBATAN_PT_50K_8.png" /> JEMBATAN_PT_50K'
            });
var format_JEMBATAN_LN_50K_9 = new ol.format.GeoJSON();
var features_JEMBATAN_LN_50K_9 = format_JEMBATAN_LN_50K_9.readFeatures(json_JEMBATAN_LN_50K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEMBATAN_LN_50K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JEMBATAN_LN_50K_9.addFeatures(features_JEMBATAN_LN_50K_9);
var lyr_JEMBATAN_LN_50K_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JEMBATAN_LN_50K_9, 
                style: style_JEMBATAN_LN_50K_9,
                popuplayertitle: "JEMBATAN_LN_50K",
                interactive: true,
                title: '<img src="styles/legend/JEMBATAN_LN_50K_9.png" /> JEMBATAN_LN_50K'
            });
var format_GARISRPANTAI_LN_50K_10 = new ol.format.GeoJSON();
var features_GARISRPANTAI_LN_50K_10 = format_GARISRPANTAI_LN_50K_10.readFeatures(json_GARISRPANTAI_LN_50K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARISRPANTAI_LN_50K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GARISRPANTAI_LN_50K_10.addFeatures(features_GARISRPANTAI_LN_50K_10);
var lyr_GARISRPANTAI_LN_50K_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GARISRPANTAI_LN_50K_10, 
                style: style_GARISRPANTAI_LN_50K_10,
                popuplayertitle: "GARISRPANTAI_LN_50K",
                interactive: true,
                title: '<img src="styles/legend/GARISRPANTAI_LN_50K_10.png" /> GARISRPANTAI_LN_50K'
            });
var format_MENARATELPON_PT_50K_11 = new ol.format.GeoJSON();
var features_MENARATELPON_PT_50K_11 = format_MENARATELPON_PT_50K_11.readFeatures(json_MENARATELPON_PT_50K_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MENARATELPON_PT_50K_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MENARATELPON_PT_50K_11.addFeatures(features_MENARATELPON_PT_50K_11);
var lyr_MENARATELPON_PT_50K_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MENARATELPON_PT_50K_11, 
                style: style_MENARATELPON_PT_50K_11,
                popuplayertitle: "MENARATELPON_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/MENARATELPON_PT_50K_11.png" /> MENARATELPON_PT_50K'
            });
var format_PEMUKIMAN_AR_50K_12 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_12 = format_PEMUKIMAN_AR_50K_12.readFeatures(json_PEMUKIMAN_AR_50K_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_50K_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_12.addFeatures(features_PEMUKIMAN_AR_50K_12);
var lyr_PEMUKIMAN_AR_50K_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_50K_12, 
                style: style_PEMUKIMAN_AR_50K_12,
                popuplayertitle: "PEMUKIMAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_12.png" /> PEMUKIMAN_AR_50K'
            });
var format_PESISIR_AR_50K_13 = new ol.format.GeoJSON();
var features_PESISIR_AR_50K_13 = format_PESISIR_AR_50K_13.readFeatures(json_PESISIR_AR_50K_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PESISIR_AR_50K_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PESISIR_AR_50K_13.addFeatures(features_PESISIR_AR_50K_13);
var lyr_PESISIR_AR_50K_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PESISIR_AR_50K_13, 
                style: style_PESISIR_AR_50K_13,
                popuplayertitle: "PESISIR_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PESISIR_AR_50K_13.png" /> PESISIR_AR_50K'
            });
var format_PENDIDIKAN_AR_50K_14 = new ol.format.GeoJSON();
var features_PENDIDIKAN_AR_50K_14 = format_PENDIDIKAN_AR_50K_14.readFeatures(json_PENDIDIKAN_AR_50K_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_AR_50K_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_AR_50K_14.addFeatures(features_PENDIDIKAN_AR_50K_14);
var lyr_PENDIDIKAN_AR_50K_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_AR_50K_14, 
                style: style_PENDIDIKAN_AR_50K_14,
                popuplayertitle: "PENDIDIKAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_AR_50K_14.png" /> PENDIDIKAN_AR_50K'
            });
var format_SPBU_PT_50K_15 = new ol.format.GeoJSON();
var features_SPBU_PT_50K_15 = format_SPBU_PT_50K_15.readFeatures(json_SPBU_PT_50K_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPBU_PT_50K_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPBU_PT_50K_15.addFeatures(features_SPBU_PT_50K_15);
var lyr_SPBU_PT_50K_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPBU_PT_50K_15, 
                style: style_SPBU_PT_50K_15,
                popuplayertitle: "SPBU_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/SPBU_PT_50K_15.png" /> SPBU_PT_50K'
            });
var format_SARANAIBADAH_AR_50K_16 = new ol.format.GeoJSON();
var features_SARANAIBADAH_AR_50K_16 = format_SARANAIBADAH_AR_50K_16.readFeatures(json_SARANAIBADAH_AR_50K_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANAIBADAH_AR_50K_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAIBADAH_AR_50K_16.addFeatures(features_SARANAIBADAH_AR_50K_16);
var lyr_SARANAIBADAH_AR_50K_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SARANAIBADAH_AR_50K_16, 
                style: style_SARANAIBADAH_AR_50K_16,
                popuplayertitle: "SARANAIBADAH_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/SARANAIBADAH_AR_50K_16.png" /> SARANAIBADAH_AR_50K'
            });
var format_SPBU_PT_50K_17 = new ol.format.GeoJSON();
var features_SPBU_PT_50K_17 = format_SPBU_PT_50K_17.readFeatures(json_SPBU_PT_50K_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPBU_PT_50K_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPBU_PT_50K_17.addFeatures(features_SPBU_PT_50K_17);
var lyr_SPBU_PT_50K_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPBU_PT_50K_17, 
                style: style_SPBU_PT_50K_17,
                popuplayertitle: "SPBU_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/SPBU_PT_50K_17.png" /> SPBU_PT_50K'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_ADMINISTRASIKABKOTA_LN_50K_1.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_2.setVisible(true);lyr_BANGUNAN_AR_50K_3.setVisible(true);lyr_ADMINISTRASIKABKOTA_AR_50K_4.setVisible(true);lyr_ADMINISTRASIKECAMATAN_LN_50K_5.setVisible(true);lyr_BANGUNAN_PT_50K_6.setVisible(true);lyr_JALAN_LN_50K_7.setVisible(true);lyr_JEMBATAN_PT_50K_8.setVisible(true);lyr_JEMBATAN_LN_50K_9.setVisible(true);lyr_GARISRPANTAI_LN_50K_10.setVisible(true);lyr_MENARATELPON_PT_50K_11.setVisible(true);lyr_PEMUKIMAN_AR_50K_12.setVisible(true);lyr_PESISIR_AR_50K_13.setVisible(true);lyr_PENDIDIKAN_AR_50K_14.setVisible(true);lyr_SPBU_PT_50K_15.setVisible(true);lyr_SARANAIBADAH_AR_50K_16.setVisible(true);lyr_SPBU_PT_50K_17.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_ADMINISTRASIKABKOTA_LN_50K_1,lyr_ADMINISTRASIKECAMATAN_AR_50K_2,lyr_BANGUNAN_AR_50K_3,lyr_ADMINISTRASIKABKOTA_AR_50K_4,lyr_ADMINISTRASIKECAMATAN_LN_50K_5,lyr_BANGUNAN_PT_50K_6,lyr_JALAN_LN_50K_7,lyr_JEMBATAN_PT_50K_8,lyr_JEMBATAN_LN_50K_9,lyr_GARISRPANTAI_LN_50K_10,lyr_MENARATELPON_PT_50K_11,lyr_PEMUKIMAN_AR_50K_12,lyr_PESISIR_AR_50K_13,lyr_PENDIDIKAN_AR_50K_14,lyr_SPBU_PT_50K_15,lyr_SARANAIBADAH_AR_50K_16,lyr_SPBU_PT_50K_17];
lyr_ADMINISTRASIKABKOTA_LN_50K_1.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BANGUNAN_AR_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIKABKOTA_AR_50K_4.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIKECAMATAN_LN_50K_5.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_BANGUNAN_PT_50K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_JALAN_LN_50K_7.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JEMBATAN_PT_50K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'JBTJMB': 'JBTJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_JEMBATAN_LN_50K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'JBTJMB': 'JBTJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_GARISRPANTAI_LN_50K_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'DTMVER': 'DTMVER', 'KARGPN': 'KARGPN', 'FCODE': 'FCODE', 'KODGPN': 'KODGPN', 'TIPGPN': 'TIPGPN', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_MENARATELPON_PT_50K_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PEMUKIMAN_AR_50K_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PESISIR_AR_50K_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'TIPPSS': 'TIPPSS', 'STAPSS': 'STAPSS', 'JNSPAN': 'JNSPAN', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PENDIDIKAN_AR_50K_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGDPDK': 'FGDPDK', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSPDK': 'JNSPDK', 'JJGPDF': 'JJGPDF', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SPBU_PT_50K_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SARANAIBADAH_AR_50K_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SPBU_PT_50K_17.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_ADMINISTRASIKABKOTA_LN_50K_1.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BANGUNAN_AR_50K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASIKABKOTA_AR_50K_4.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_LN_50K_5.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_BANGUNAN_PT_50K_6.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_JALAN_LN_50K_7.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_JEMBATAN_PT_50K_8.set('fieldImages', {'NAMOBJ': '', 'TIPJMB': '', 'FGSJMB': '', 'TONJMB': '', 'TGGJMB': '', 'LBRJMB': '', 'MATJMB': '', 'STRJMB': '', 'DEKJMB': '', 'BTSJMB': '', 'AYUJMB': '', 'JBTJMB': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_JEMBATAN_LN_50K_9.set('fieldImages', {'NAMOBJ': '', 'TIPJMB': '', 'FGSJMB': '', 'TONJMB': '', 'TGGJMB': '', 'JBTJMB': '', 'LBRJMB': '', 'MATJMB': '', 'STRJMB': '', 'DEKJMB': '', 'BTSJMB': '', 'AYUJMB': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_GARISRPANTAI_LN_50K_10.set('fieldImages', {'NAMOBJ': '', 'DTMVER': '', 'KARGPN': '', 'FCODE': '', 'KODGPN': '', 'TIPGPN': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_MENARATELPON_PT_50K_11.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_PEMUKIMAN_AR_50K_12.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PESISIR_AR_50K_13.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'TIPPSS': '', 'STAPSS': '', 'JNSPAN': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PENDIDIKAN_AR_50K_14.set('fieldImages', {'NAMOBJ': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGDPDK': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JNSPDK': 'TextEdit', 'JJGPDF': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SPBU_PT_50K_15.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_SARANAIBADAH_AR_50K_16.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSIBD': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SPBU_PT_50K_17.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_ADMINISTRASIKABKOTA_LN_50K_1.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BANGUNAN_AR_50K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASIKABKOTA_AR_50K_4.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASIKECAMATAN_LN_50K_5.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_BANGUNAN_PT_50K_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_JALAN_LN_50K_7.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JEMBATAN_PT_50K_8.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'JBTJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_JEMBATAN_LN_50K_9.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'JBTJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_GARISRPANTAI_LN_50K_10.set('fieldLabels', {'NAMOBJ': 'no label', 'DTMVER': 'no label', 'KARGPN': 'no label', 'FCODE': 'no label', 'KODGPN': 'no label', 'TIPGPN': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_MENARATELPON_PT_50K_11.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PEMUKIMAN_AR_50K_12.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PESISIR_AR_50K_13.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'TIPPSS': 'no label', 'STAPSS': 'no label', 'JNSPAN': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PENDIDIKAN_AR_50K_14.set('fieldLabels', {'NAMOBJ': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGDPDK': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSPDK': 'no label', 'JJGPDF': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SPBU_PT_50K_15.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SARANAIBADAH_AR_50K_16.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SPBU_PT_50K_17.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SPBU_PT_50K_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});