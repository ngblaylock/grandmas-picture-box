

// ---------- script properties ----------

var include_num = 1;
var bold = 0;

// ---------- sites ----------


var s = new Array();

s[0] = "JSE^form.html^Enter JSE in the example above ...^open source, free, client side";
s[1] = "JSE DOCUMENTATION^doc.txt^JSE is a client-side local site search engine. Written entirely in JavaScript 1.3 it works with browsers from Netscape 4.7 to Microsoft Internet Explorer 6.0 ...^ faq, docs, instructions";
s[2] = "Grandma's Picture Box^../index.htm^Grandma's Picture Box Home page";
s[3] = "Photographs^../index.htm^Grandma's Picture Box Home page";
s[4] = "Written Histories^../index.htm^Grandma's Picture Box Home page";
s[5] = "Video^../index.htm^Grandma's Picture Box Home page";
s[6] = "Sounds^../index.htm^Grandma's Picture Box Home page";
s[7] = "Everett Waite Jorgensen Slide Show^../everett/slide01.htm^Everett Waite Jorgensen";
s[8] = "Everett Waite Jorgensen Slide Show^../everett/slide02.htm^Arda, Everett, Levi";
s[9] = "Everett Waite Jorgensen Slide Show^../everett/slide10.htm^Everett & Leone Jorgensen Family";
s[10] = "Everett Waite Jorgensen Slide Show^../everett/slide12.htm^Everett Leone Jorgensen Newlywed";
s[11] = "Everett Waite Jorgensen Slide Show^../everett/slide16.htm^Everett & Leone Jorgensen Wedding";
s[12] = "Everett Waite Jorgensen Slide Show^../everett/slide18.htm^Rodney";
s[13] = "Everett Waite Jorgensen Slide Show^../everett/slide54.htm^Everett Waite Jorgensen as a Young Man";
s[14] = "Lola Everett Jorgensen Slide Show^../lola/slide01.htm^Lola Everett Jorgensen in a suit";
s[15] = "Lola Everett Jorgensen Slide Show^../lola/slide03.htm^Lola E & Maria E Waite Jorgensen Family";
s[16] = "Lola Everett Jorgensen Slide Show^../lola/slide06.htm^Lola E Jorgensen and Family";
s[17] = "Lola Everett Jorgensen Slide Show^../lola/slide08.htm^Lola E Jorgensen and Family";
s[18] = "Lola Everett Jorgensen Slide Show^../lola/slide14.htm^Lola Everrett Jorgensen with a Horse";
s[19] = "Lola Everett Jorgensen Slide Show^../lola/slide28.htm^Lola E. Jorgensen in a scout uniform";
s[20] = "Lola Everett Jorgensen Slide Show^../lola/slide38.htm^Lola Jorgensen and Smokey";
s[21] = "Lola Everett Jorgensen Slide Show^../lola/slide39.htm^The Home on the Hill in Hyde Park (dry farm)";
s[22] = "Lola Everett Jorgensen Slide Show^../lola/slide45.htm^Issac Jorgensen, Isaac, Rebecca & Family";
s[23] = "Lola Everett Jorgensen Slide Show^../lola/slide48.htm^Issac Jorgensen Family";
s[24] = "Maria Elizabeth Waite Slide Show^../maria/slide1.htm^Maria Elizabeth Waite Jorgensen";
s[25] = "Maria Elizabeth Waite Slide Show^../maria/slide2.htm^Maria E Waite School Picture";
s[26] = "Maria Elizabeth Waite Slide Show^../maria/slide4.htm^Maria Elizabeth Waite Who was Raised by Her Aunt Grandma Ridgeway";
s[27] = "Maria Elizabeth Waite Slide Show^../maria/slide15.htm^Maria Elizabeth (Lizzie) Waite Jorgensen (in coveralls)";
s[28] = "Maria Elizabeth Waite Slide Show^../maria/slide20.htm^Lizzie, Everett, Lola, Norma, Lyda,Carlyn, Levi";
s[29] = "Maria Elizabeth Waite Slide Show^../maria/slidelast.htm^Maria Pheniex Waite";
s[30] = "Levi Harold Jorgensen Slide Show^../levij/slide11.htm^Cleon, Earl, Levi, Frank Balls, Everett";
s[31] = "Levi Harold Jorgensen Slide Show^../levij/slide17.htm^Grandpa Lola Jorgensen";
s[32] = "Levi Harold Jorgensen Slide Show^../levij/slide31.htm^Lola Jorgensen Family; spouses and children";
s[33] = "Leone Moses Jorgensen Slide Show^../leone/slide1.htm^Leone Moses Jorgensen";
s[34] = "Leone Moses Jorgensen Slide Show^../leone/slide5.htm^Leone & Fern, as a child";
s[35] = "Leone Moses Jorgensen Slide Show^../leone/slide24.htm^Leone Moses Jorgensen & Car";
s[36] = "Leone Moses Jorgensen Slide Show^../leone/slide32.htm^Leone Moses Jorgensen in her youth";
s[37] = "Leone Moses Jorgensen Slide Show^../leone/slide33.htm^Leone Moses Jorgensen & Family";
s[38] = "Leone Moses Jorgensen Slide Show^../leone/slidelast.htm^Leone Moses Jorgensen Senior Sneak";
s[39] = "Jesse Tilton Moses Jr. Slide Show^../jesset/slide1.htm^Jesse Tilton Moses Jr.";
s[40] = "Jesse Tilton Moses Jr. Slide Show^../jesset/slide21.htm^James Moses";
s[41] = "Jesse Tilton Moses Jr. Slide Show^../jesset/slide23.htm^Jesse Moses Family";
s[42] = "Jesse Tilton Moses Jr. Slide Show^../jesset/slide25.htm^Jesse T & Harriet Moses";
s[43] = "Jesse Tilton Moses Jr. Slide Show^../jesset/slide30.htm^Jesse T Moses & Lavina Family";
s[44] = "Jesse Tilton Moses Jr. Slide Show^../jesset/slide31.htm^Jesse T Moses & Lavina Harper Wedding";
s[45] = "Jesse Tilton Moses Jr. Slide Show^../jesset/slide37.htm^Jesse T Moses Sr. & Phoebe Arabell Family";
s[46] = "Jesse Tilton Moses Jr. Slide Show^../jesset/slide58.htm^Jesse and Daughters Arabell Lavina Mary Leone, Grandma's favorite picture of herself";
s[47] = "Jesse Tilton Moses Jr. Slide Show^../jesset/slide60.htm^Phoebe Arabell Moses as young girl";
s[48] = "Jesse Tilton Moses Jr. Slide Show^../jesset/slide84.htm^Leone Jorgensen Lavina Jacobs Mary Durrant";
s[49] = "Jesse Tilton Moses Jr. Slide Show^../jesset/slide87.htm^Jesse Tilton Moses Jr.";
s[50] = "Jesse Tilton Moses Jr. Slide Show^../jesset/slidelast.htm^Jesse T. Moses Jr. About the Time of His Mission";
s[51] = "Lavina Harper Moses Slide Show^../lavina/slide1.htm^Lavina Harper";
s[52] = "Lavina Harper Moses Slide Show^../lavina/slide3.htm^Lavina Harper as a young girl";
s[53] = "Lavina Harper Moses Slide Show^../lavina/slide5.htm^Charles Alfred Harper Jr.";
s[54] = "Lavina Harper Moses Slide Show^../lavina/slide7.htm^Lavina Wollerton Dilworth Harper";
s[55] = "Lavina Harper Moses Slide Show^../lavina/slide9.htm^Charles Alfred Harper";
s[56] = "Lavina Harper Moses Slide Show^../lavina/slide10.htm^Elizabeth Taylor Arrowsmith Boyes";
s[57] = "Lavina Harper Moses Slide Show^../lavina/slidelast.htm^Mary Boyes Harper Wife of Charles Alfred Harper Jr.";
s[58] = "Wilford Woodruff Slide Show^../wilford/slide25.htm^4 Generations of Woodruffs";
s[59] = "Wilford Woodruff Slide Show^../wilford/slide27.htm^One of 4 Early Home Paintings, Hung in Nauvoo Home";
s[60] = "Wilford Woodruff Slide Show^../wilford/slide28.htm^Wilford Woodruff Nauvoo Home";
s[61] = "Wilford Woodruff Slide Show^../wilford/slide32.htm^Wilford Woodruff First Valley Home, ca 1870s";
s[62] = "Wilford Woodruff Slide Show^../wilford/slide34.htm^Salt Lake Farm Home";
s[63] = "Wilford Woodruff Slide Show^../wilford/slide38.htm^Salt Lake Villa";
s[64] = "Wilford Woodruff Slide Show^../wilford/slide45.htm^Woodruff Family Mill, Farmington River, Avon Conn, Aphek's Mill";
s[65] = "Rodney Jorgensen Slide Show^../rodney/slide01.htm^Rodney Jorgensen";
s[66] = "Rodney Jorgensen Slide Show^../rodney/slide02.htm^Kay Saunders";
s[67] = "Rodney Jorgensen Slide Show^../rodney/slide05.htm^Four Generations of Jorgensens";
s[68] = "Rodney Jorgensen Slide Show^../rodney/slide54.htm^Rodney Jorgensen Family";
s[69] = "Rodney Jorgensen Slide Show^../rodney/slide56.htm^Grandpa Lola & Rodney";
s[70] = "Rodney Jorgensen Slide Show^../rodney/slidelast.htm^Rodney E. Jorgensen as a child";
s[71] = "Bryce Jorgensen Slide Show^../bryce/slide1.htm^Bryce Jorgensen";
s[72] = "Bryce Jorgensen Slide Show^../bryce/slide2.htm^Beth at her Birthday Party";
s[73] = "Bryce Jorgensen Slide Show^../bryce/slide8.htm^Bryce as Missionary";
s[74] = "Bryce Jorgensen Slide Show^../bryce/slide67.htm^Jared & Stacey Jorgensen";
s[75] = "Bryce Jorgensen Slide Show^../bryce/slide76.htm^Jolene, Rodney, Linda holding Deloy, Bryce";
s[76] = "Bryce Jorgensen Slide Show^../bryce/slide81.htm^Rodney & Bryce as Children";
s[77] = "Bryce Jorgensen Slide Show^../bryce/slide83.htm^Rodney Bryce Linda as Children";
s[78] = "Bryce Jorgensen Slide Show^../bryce/slide32.htm^Bryce Jorgensen in uniform";
s[79] = "Bryce Jorgensen Slide Show^../bryce/slide89.htm^Bryce Jorgensen Family";
s[80] = "Linda Jorgensen Blaylock Slide Show^../linda/slide1.htm^Linda Jorgensen";
s[81] = "Linda Jorgensen Blaylock Slide Show^../linda/slide5.htm^Linda Jorgensen as a child";
s[82] = "Linda Jorgensen Blaylock Slide Show^../linda/slide12.htm^John & Linda Blaylock Wedding";
s[83] = "Linda Jorgensen Blaylock Slide Show^../linda/slide15.htm^John & Linda, Gay Nel, Deloy or Jesse";
s[84] = "Linda Jorgensen Blaylock Slide Show^../linda/slide9.htm^John & Linda Blaylock Family";
s[85] = "Linda Jorgensen Blaylock Slide Show^../linda/slide45.htm^Linda Blaylock in Wedding Dress";
s[86] = "Linda Jorgensen Blaylock Slide Show^../linda/slide49.htm^Linda Jorgensen age 12";
s[87] = "Linda Jorgensen Blaylock Slide Show^../linda/slide51.htm^Linda Jorgensen as a young woman";
s[88] = "Linda Jorgensen Blaylock Slide Show^../linda/slide67.htm^Paul, Kevin, Ken Blaylock and Dog Suzie";
s[89] = "Jolene Jorgensen Rupp Slide Show^../jolene/slide1.htm^Jolene Jorgensen";
s[90] = "Jolene Jorgensen Rupp Slide Show^../jolene/slide27.htm^Jolene & Lolanne Jorgensen Softball";
s[91] = "Jolene Jorgensen Rupp Slide Show^../jolene/slide34.htm^Jolene Jorgensen as a young girl";
s[92] = "Jolene Jorgensen Rupp Slide Show^../jolene/slide37.htm^Jolene Jorgensen as a young woman";
s[93] = "Jolene Jorgensen Rupp Slide Show^../jolene/slide38.htm^Jolene Jorgensen";
s[94] = "Jolene Jorgensen Rupp Slide Show^../jolene/slide40.htm^Kent and Jolene Rupp Family";
s[95] = "Jolene Jorgensen Rupp Slide Show^../jolene/slide45.htm^Kent & Jolene Wedding";
s[96] = "Jolene Jorgensen Rupp Slide Show^../jolene/slide48.htm^Lolanne, Jolene, & Gay Nel";
s[97] = "Jolene Jorgensen Rupp Slide Show^../jolene/slide71.htm^Jolene Jorgensen and Friends";
s[98] = "Lolanne Jorgensen Hanson Slide Show^../lolane/slide1.htm^Lolanne Jorgensen";
s[99] = "Lolanne Jorgensen Hanson Slide Show^../lolane/slide2.htm^Bob & Lolanne Hanson Family";
s[100] = "Lolanne Jorgensen Hanson Slide Show^../lolane/slide14.htm^Lolanne Jorgensen Seminary Class";
s[101] = "Lolanne Jorgensen Hanson Slide Show^../lolane/slide16.htm^Lolanne Jorgensen Seminary Class Before School";
s[102] = "Lolanne Jorgensen Hanson Slide Show^../lolane/slidelast.htm^Lolanne Jorgensen baby picture";
s[103] = "Jesse Deloy Jorgensen Slide Show^../jesse/slide1.htm^Jesse Jorgensen";
s[104] = "Jesse Deloy Jorgensen Slide Show^../jesse/slide5.htm^Jesse Jorgensen as a child";
s[105] = "Jesse Deloy Jorgensen Slide Show^../jesse/slide12.htm^Jesse & Vernena Jorgensen Family";
s[106] = "Jesse Deloy Jorgensen Slide Show^../jesse/slide14.htm^Jesse & Vernena";
s[107] = "Jesse Deloy Jorgensen Slide Show^../jesse/slide15.htm^Elder Jesse Jorgensen returning from his mission";
s[108] = "Jesse Deloy Jorgensen Slide Show^../jesse/slide17.htm^Elder Jesse Jorgensen on a bike";
s[109] = "Jesse Deloy Jorgensen Slide Show^../jesse/slidelast.htm^Jesse Jorgensen as a baby";
s[110] = "Gay Nel Jorgensen Barzee Slide Show^../gaynel/slide1.htm^Gay Nel Jorgensen";
s[111] = "Gay Nel Jorgensen Barzee Slide Show^../gaynel/slide10.htm^Gay Nel Jorgensen in her youth";
s[112] = "Gay Nel Jorgensen Barzee Slide Show^../gaynel/slide5.htm^Gay Nel Jorgensen 4th grade";
s[113] = "Gay Nel Jorgensen Barzee Slide Show^../gaynel/slide7.htm^Gay Nel Jorgensen as a young girl";
s[114] = "Gay Nel Jorgensen Barzee Slide Show^../gaynel/slide11.htm^Gay Nel and Deloy Jorgensen on steps at home in Parma";
s[115] = "Gay Nel Jorgensen Barzee Slide Show^../gaynel/slide12.htm^Gay Nel Jolene and Deloy Jorgensen";
s[116] = "Gay Nel Jorgensen Barzee Slide Show^../gaynel/slide33.htm^Ron & Gay Nel Outen Family";
s[117] = "Gay Nel Jorgensen Barzee Slide Show^../gaynel/slide36.htm^Mike & Gay Nel Barzee Wedding";
s[118] = "Gay Nel Jorgensen Barzee Slide Show^../gaynel/slidelast.htm^Mike & Gay Nel Barzee-Outen Family";
s[119] = "Pedigree Chart Pictures^../history/pedigree.htm^Photographs sized for pedigree charts for, Everett, Lola, Isaac, Dorthe, Laurs, Rebecca, Maria, Leone, Jesse, James, Wilford, Aphek, Phoebe, Sarah, Lavina, Charles, Mary, Elizabeth";
s[120] = "Written Histories^../history/awlifesketch.htm^History of Aphek Woodruff, Father of Wilford Woodruff, Pioneer of 1847, Aphek and Beulah were pioneers";
s[121] = "Written Histories^../history/cahsrlifesketch.htm^Charles Alfred Harper Life Sketch, pioneer in the Vanguard company, lived in Nauvoo.";
s[122] = "Written Histories^../history/charlesalfredharperdiary.pdf^Detailed journal of Charles Alfred Harper";
s[123] = "Written Histories^../history/cahjrlifesketch.htm^Charles Alfred Harper Jr. Life Sketch, born in Wyoming on the journey West.";
s[124] = "Written Histories^../history/dmtnlifesketch.htm^Life Sketch of Dorthea Marie Thomasen Nielsen, Suffered great losses. As an orphan, she joined the Church and became one of the early pioneers.";
s[125] = "Written Histories^../history/eslifesketch.htm^>Life Sketch of Eliza Spencer Moses, Early Saint who was persecuted by family, driven from Missouri and then Nauvoo, and came to Utah as a pioneer";
s[126] = "Written Histories^../history/etblifesketch.htm^Life Sketch of Elizabeth Taylor Boyes, Sister of the Prophet John Taylor. Sacrificed to join the Church and became a great pioneer.";
s[127] = "Written Histories^../history/ewjmemories.htm^Memories of Everett Jorgensen";
s[128] = "Written Histories^../history/gblifesketch.htm^Life Sketch of George Boyes, Early Nauvoo Saint who suffered losses and became a pioneer.";
s[129] = "Written Histories^../history/hjlifesketch.htm^Life Sketch of Hans Jorgensen, Pioneer from Denmark who sacrificed much saying, If it is worth anything, it is worth everything.";
s[130] = "Written Histories^../history/ijlifesketch.htm^Life Sketch of Isaac Jorgensen, Craftsman who helped build the Logan Temple and was later an ordinance worker there.";
s[131] = "Written Histories^../history/jmlifesketch.htm^James Moses Life Sketch, Early Kirtland and Nauvoo Saint who protected Joseph Smith from a mob and Wilford Woodruff from a US Marshall.";
s[132] = "Written Histories^../history/jmjrautobiography.htm^Jesse Tilton Moses Jr. Autobiography, Faithful Utah Saint who served a mission to Missouri. Inspiring dream about paying tithing.";
s[133] = "Written Histories^../history/jtmsrlifesketch.htm^Jesse Tilton Moses Sr. Life Sketch, Pioneer child and early Utah Saint who was an example of generosity.";
s[134] = "Written Histories^../history/llnlifesketch.htm^Lars Larsen Nielsen Life Sketch, Began working for his own living at age 9. Pioneer with a story of faithful repayment to the PEF.";
s[135] = "Written Histories^../history/lhmlifesketch.htm^Lavina Harper Moses Life Sketch, Faithful Utah Saint who shared her talents in many ways. She is known for her painting of Wilford Woodruff's Vermont home.";
s[136] = "Written Histories^../history/lwdlifesketch.htm^Lavina Wollerton Dilworth Harper Life Sketch, Faithful pioneer who drove the wagon most of the distance, until at Ft. Laramie, WY, she stopped to give birth to Charles Alfred Harper Jr.";
s[137] = "Written Histories^../history/lmjautobiography.htm^Leone Moses Jorgensen Autobiography, 1988 autobiography highlighting memories of life with Everett, written for her senior class reunion memory book.";
s[138] = "Written Histories^../history/ljwobituary.htm^Levi Joseph Waite Obituary, Faithful early pioneer who conquered struggles and dissapointment with a cheerful nature.";
s[139] = "Written Histories^../history/lejlifesketch.htm^Lola Everett Jorgensen Life Sketch, Faithful Utah Saint who loved temple work and served the youth in scouting for 35 years. Hyde Park Sexton.";
s[140] = "Written Histories^../history/jtlifesketch.htm^James Taylor, Father of the Prophet John Taylor. Nauvoo pioneer who walked across the plains at age 64.";
s[141] = "Written Histories^../history/mewjlifesketch.htm^Maria Elizabeth Waite Jorgensen Life Sketch, Faithful Utah saint. Her history details the lifestyle of early pioneers and includes moments of inspiration.";
s[142] = "Written Histories^../history/mbhtimeline.htm^Mary Boyes Harper Time Line, Faithful Utah Saint. School teacher and Relief Society President for many years.";
s[143] = "Written Histories^../history/pawlifesketch.htm^Phoebe Arabel Woodruff Moses, Faithful Arizona settlement pioneer who faced challeges with indians. Daughters of the Utah Pioneers president in Smithfield Utah.";
s[144] = "Written Histories^../history/rnjlifesketch.htm^Rebecca Nielsen Jorgensen Life Sketch, Pioneer from Denmark who had her life spared on more than one occassion.";
s[145] = "Written Histories^../history/sbwlifesketch.htm^Sarah Brown Woodruff Life Sketch, Fourth wife of the Prophet Wilford Woodruff. Her life was spared in a steamboat explosion, but her father eventually died from complications.";
s[146] = "Written Histories^../history/wwarticle.htm^Ensign article on Wilford Woodruff";
s[147] = "Written Histories^../history/wwtestim.htm^Wilford Woodruff recorded testimony";


// ---------- end of script properties and sites ----------


var cookies = document.cookie;
var p = cookies.indexOf("d=");

if (p != -1) {
	var st = p + 2;
	var en = cookies.indexOf(";", st);
	if (en == -1) {
		en = cookies.length;
	}
	var d = cookies.substring(st, en);
	d = unescape(d);
}
var od = d;
var m = 0;
if (d.charAt(0) == '"' && d.charAt(d.length - 1) == '"') {
	m = 1;
}

var r = new Array();
var co = 0;

if (m == 0) {
	var woin = new Array();
	var w = d.split(" ");
	for (var a = 0; a < w.length; a++) {
		woin[a] = 0;
		if (w[a].charAt(0) == '-') {
			woin[a] = 1;
		}
	}
	for (var a = 0; a < w.length; a++) {
		w[a] = w[a].replace(/^\-|^\+/gi, "");
	}
	a = 0;
	for (var c = 0; c < s.length; c++) {
		pa = 0;
		nh = 0;
		for (var i = 0; i < woin.length; i++) {
			if (woin[i] == 0) {
				nh++;
				var pat = new RegExp(w[i], "i");
				var rn = s[c].search(pat);
				if (rn >= 0) {
					pa++;
				} else {
					pa = 0;
				}
			}
			if (woin[i] == 1) {
				var pat = new RegExp(w[i], "i");
				var rn = s[c].search(pat);
				if (rn >= 0) {
					pa = 0;
				}
			}
		}
		if (pa == nh) {
			r[a] = s[c];
			a++;
		}
	}
	co = a;
}

if (m == 1) {
	d = d.replace(/"/gi, "");
	var a = 0;
	var pat = new RegExp(d, "i");
	for (var c = 0; c < s.length; c++) {
		var rn = s[c].search(pat);
		if (rn >= 0) {
			r[a] = s[c];
			a++;
		}
	}
	co = a;

}


function return_query() {
	document.jse_Form.d.value = od;
}

function num_jse() {
	document.write(co);
}

function out_jse() {
	if (co == 0) {
		document.write('Your search did not match any documents.<p>Make sure all keywords are spelt correctly.<br>Try different or more general keywords.');
		return;
	}
	for (var a = 0; a < r.length; a++) {
		var os = r[a].split("^");
		if (bold == 1 && m == 1) {
			var br = "<b>" + d + "</b>";
			os[2] = os[2].replace(pat, br);
		}
		if (include_num == 1) {
			document.write(a + 1, '. <a href="', os[1], '">', os[0], '</a><br>', os[2], '<p>');
		} else {
			document.write('<a href="', os[1], '">', os[0], '</a><br>', os[2], '<p>');
		}
	}

}
