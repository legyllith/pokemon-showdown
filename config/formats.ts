// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	// Sw/Sh Singles
	///////////////////////////////////////////////////////////////////
	{
		section: "Normal Battles",
	},
	{
		name: "[Gen 8] Standard Normal Battle",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Dynamax Clause', 'Adjust Level = 30'],
		
	},
	{
		name: "[Gen 8] Tournament 1",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Species Clause', 'Dynamax Clause', 'Adjust Level = 10', 'Electric Terrain Rule'],
		
	},
	{
		name: "[Gen 8] Tournament 2",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Species Clause', 'Dynamax Clause', 'Adjust Level = 20', 'Desert Terrain Rule'],
		
	},
	{
		name: "[Gen 8] Tournament 3",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Species Clause', 'Dynamax Clause', 'Adjust Level = 25', 'Beach Terrain Rule'],
		
	},
	{
		name: "[Gen 8] Tournament 4",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Species Clause', 'Dynamax Clause', 'Adjust Level = 30', 'Poison Mist Terrain Rule', 'Item Clause'],
		
	},
	{
		name: "[Gen 8] Boss",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Dynamax Clause', 'Adjust Level = 30', '! EV Limit'],
		
	},
	{
		section: "Double Battles",
	},
	{
		name: "[Gen 8] Standard Double Battle",
		gameType: 'doubles',
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Species Clause', 'Dynamax Clause', 'Adjust Level = 30'],
		
	},
	{
		section: "Multi Battles",
	},
	{
		name: "[Gen 8] Standard Multi Battle",
		mod: 'gen8',
		gameType: 'multi',
		ruleset: ['Max Team Size = 3','Standard NatDex', 'Dynamax Clause', 'Adjust Level = 30'],
	},
	];