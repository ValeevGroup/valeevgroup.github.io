/*
@ @licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2017 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "MPQC", "index.html", [
    [ "Compiling MPQC", "mpqccomp.html", null ],
    [ "Using MPQC to Develop New Features", "develop.html", [
      [ "Developing code within MPQC", "develop.html#develop-within-mpqc", [
        [ "Adding Test Cases to the Verification Suite", "develop.html#devcheck", null ]
      ] ],
      [ "Extending MPQC functionality", "develop.html#extend-mpqc", [
        [ "MP2 Implementation Example", "develop.html#devsampmp2", [
          [ "MP2 Implementation Example: Source", "develop.html#devsampmp2src", null ],
          [ "MP2 Implementation Example: CMakeLists.txt", "develop.html#devsampmp2mak", null ],
          [ "MP2 Implementation Example: Input", "develop.html#devsampmp2inp", null ]
        ] ]
      ] ],
      [ "Using MPQC as an external library in a separate project", "develop.html#develop-outside-mpqc", [
        [ "AOInts Implementation Example", "develop.html#devsampaoints", [
          [ "AOInts Implementation Example: Source", "develop.html#devsampaointssrc", null ],
          [ "AOInts Implementation Example: CMakeLists.txt", "develop.html#devsampaointsmak", null ],
          [ "AOInts Implementation Example: Input", "develop.html#devsampaointsinp", null ]
        ] ]
      ] ]
    ] ],
    [ "Using MPQC LCAO and AO Factory Interfaces", "factory.html", null ],
    [ "The Namespace Tree", "namespacetree.html", null ],
    [ "The Source Tree", "srctree.html", null ],
    [ "MPQC overview and documentation", "top.html", [
      [ "Overview", "top.html#overview", null ],
      [ "User's Reference", "top.html#userref", null ],
      [ "Developer's Reference", "top.html#develref", null ]
    ] ],
    [ "MPQC Object-Oriented Input", "mpqcinp.html", [
      [ "Overview of the Object-Oriented Input", "mpqcinp.html#mpqcooover", null ],
      [ "A Walk-Through of an Object-Oriented Input File", "mpqcinp.html#mpqcoowalk", null ],
      [ "Sample Object-Oriented Input Files", "mpqcinp.html#mpqcoosamp", null ],
      [ "Specifying MPQC Input in XML and INFO formats", "mpqcinp.html#mpqcoononjson", null ]
    ] ],
    [ "MPQC License", "mpqclic.html", null ],
    [ "Running MPQC", "mpqcrunning.html", [
      [ "Command Line Options", "mpqcrunning.html#mpqccomline", [
        [ "MPQC Usage Examples", "mpqcrunning.html#mpqccomlineexamples", null ]
      ] ],
      [ "MPQC Environment Variables", "mpqcrunning.html#mpqcenv", null ],
      [ "Running on a Distributed Memory Multiprocessor with MPI", "mpqcrunning.html#mpqcmpi", [
        [ "MVAPICH2", "mpqcrunning.html#mpqcmpimvapich2", null ]
      ] ],
      [ "MPQC Optimization Hints", "mpqcrunning.html#mpqcopthints", [
        [ "Number of MADWorld Threads", "mpqcrunning.html#mpqcopthintsthr", null ],
        [ "Communication Buffers", "mpqcrunning.html#mpqcopthintsbuf", null ],
        [ "MPI Ranks per node", "mpqcrunning.html#mpqcopthintsmpi", null ],
        [ "BLAS/LAPACK Library", "mpqcrunning.html#mpqcopthintsblaslapack", null ]
      ] ]
    ] ],
    [ "MPQC Warranty", "mpqcwar.html", null ],
    [ "The Units Library", "units.html", [
      [ "Motivation", "units.html#Motivation", null ],
      [ "Synopsis", "units.html#Synopsis", null ],
      [ "Using the library", "units.html#units_using", null ]
    ] ],
    [ "The KeyVal Library", "keyval.html", [
      [ "Assignment", "keyval.html#keyvalass", null ],
      [ "Keyword Grouping and Paths", "keyval.html#keyvalgroup", null ],
      [ "Constructing KeyVal", "keyval.html#keyvalconstruct", null ],
      [ "Simple Object Construction", "keyval.html#keyvalobj", null ],
      [ "Polymorphic Object Construction", "keyval.html#keyvalpobj", null ],
      [ "Array Specification", "keyval.html#keyvalarray", [
        [ "JSON Standard Array Syntax", "keyval.html#keyvalarrayjsonarray", null ],
        [ "JSON Extended Array Syntax", "keyval.html#keyvalarrayjsonextarray", null ],
        [ "Programmatic Handling of Arrays", "keyval.html#keyvalarrayprogrammatic", null ]
      ] ],
      [ "Value Substitution", "keyval.html#keyvalsub", null ],
      [ "The DescribedClass class", "keyval.html#keyvaldescribedclass", null ],
      [ "Forced linkage of DescribedClass objects", "keyval.html#keyvalforcelink", null ],
      [ "Deprecated keywords", "keyval.html#keyvaldeprecatedkw", null ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Modules", "modules.html", "modules" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", "functions_type" ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_get_long_opt_8cpp.html",
"ccsd__pno_8cpp.html",
"classmpqc_1_1_cluster.html#a043edaa1cea3345f5aeba288997fecca",
"classmpqc_1_1_key_val.html#a2602c29e5878d0e060eba4d9fd8f0491",
"classmpqc_1_1_wavefunction_property.html",
"classmpqc_1_1lcao_1_1_c_c_s_d___f12.html#a701b7770c0e038805d9f6ece8a5300ff",
"classmpqc_1_1lcao_1_1_c_c_s_d_t2.html#aba36378a44e15662c3e5191b25bd2c7c",
"classmpqc_1_1lcao_1_1_factory.html#aa677c00643a7975e24a032f440db68df",
"classmpqc_1_1lcao_1_1_r_i_j_c_a_d_f_kz_r_h_f.html#a7c446b95c40fb3c3c276c9fe0f194936",
"classmpqc_1_1lcao_1_1gaussian_1_1_direct_tile.html#aafd54826a1aa580a05c10847d8326d7e",
"classmpqc_1_1lcao_1_1scf_1_1_periodic_four_center_fock_builder.html#af0af46f0643f66075182ecaecd6af176",
"classmpqc_1_1math_1_1_petite_list.html#a6fd2e3aaa379968daec8b9a5e0559410ae1671797c52e15f763380b45e841ec32",
"classmpqc_1_1utility_1_1_observer.html#a3141f460046e6e32c32807a18b767e3e",
"decomposed__tensor__unary_8h.html#aede59c199ca2317c2824be47b785f45d",
"forcelink_8h_source.html",
"group___core_key_val.html#gaed852023b22874529d5999bb2698e760",
"namespacemembers.html",
"permutation_8h.html#aab61675d0cd92235983ac2cbaa1d68e9",
"structmadness_1_1archive_1_1_archive_load_impl_3_01_archive_00_01mpqc_1_1_row_matrix_3_01___t_01_4_01_4.html",
"structmpqc_1_1utility_1_1aux_1_1gen__seq_3_010_00_01_is_8_8_8_01_4.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';