define(['game/constants/CampConstants'], function (CampConstants) {
	
	var ImprovementConstants = {

		campImprovements: {
			home: {
				description: "Foundation of a camp.",
				useActionName: "Rest",
				improvementLevelsPerTechLevel: 0,
			},
			campfire: {
				description: "Increases rumour generation and unlocks upgrades.",
				useActionName: "Sit down",
				improvementLevelsPerTechLevel: 5,
			},
			house: {
				description: "A place for " + CampConstants.POPULATION_PER_HOUSE + " people to stay.",
				improvementLevelsPerTechLevel: 0,
			},
			house2: {
				description: "Houses " + CampConstants.POPULATION_PER_HOUSE2 + " people.",
			},
			storage: {
				description: "Increases resource storage.",
				improvementLevelsPerTechLevel: 1,
			},
			hospital: {
				description: "Enables healing injuries.",
				useActionName: "Treatment",
				improvementLevelsPerTechLevel: 1,
			},
			market: {
				description: "Enables foreign traders to visit.",
				useActionName: "Visit",
				improvementLevelsPerTechLevel: 5,
			},
			inn: {
				description: "Increases rumours and enables recruitment.",
				useActionName: "Recruit"
			},
			library: {
				description: "Generates evidence.",
				improvementLevelsPerTechLevel: 5,
			},
			darkfarm: {
				description: "Produces food.",
				improvementLevelsPerTechLevel: 5,
			},
			aqueduct: {
				description: "Water infrastructure to improve collecting efficiency.",
				improvementLevelsPerTechLevel: 1,
			},
			temple: {
				description: "A central location for religious and cultural activities.",
				useActionName: "Donate",
				improvementLevelsPerTechLevel: 5,
			},
			shrine: {
				description: "A place to connect to the strange spirits.",
				useActionName: "Meditate",
				improvementLevelsPerTechLevel: 5,
			},
			barracks: {
				description: "Allows 10 soldiers.",
				improvementLevelsPerTechLevel: 1,
			},
			apothecary: {
				description: "Enables production of medicine.",
				improvementLevelsPerTechLevel: 5,
			},
			smithy: {
				description: "Workspace for toolsmiths.",
				improvementLevelsPerTechLevel: 5,
			},
			cementmill: {
				description: "Enables production of a new kind of construction material.",
				improvementLevelsPerTechLevel: 5,
			},
			stable: {
				description: "Space to set up a trading caravan.",
 				improvementLevelsPerTechLevel: 1,
			},
			fortification: {
				description: "Camp defences: +" + CampConstants.FORTIFICATION_1_DEFENCE + ".",
				improvementLevelsPerTechLevel: 1,
			},
			fortification2: {
				description: "Camp defences: +" + CampConstants.FORTIFICATION_2_DEFENCE + ".",
				improvementLevelsPerTechLevel: 1,
			},
			researchcenter: {
				improvementLevelsPerTechLevel: 5,
			},
			tradepost: {
				description: "Connect camps to a trade network.",
			},
			ceiling: {},
			radiotower: {
				description: "Increases reputation.",
				improvementLevelsPerTechLevel: 5,
			},
			lights: {
				description: "Keep the darkness at bay for good.",
			},
			generator: {
				description: "Increases reputation bonus from housing (" + CampConstants.REPUTATION_PER_HOUSE_FROM_GENERATOR + "% per house).",
				improvementLevelsPerTechLevel: 10,
			},
			square: {
				description: "A place to relax and socialize.",
				improvementLevelsPerTechLevel: 1,
			},
			garden: {
				description: "A dash of beauty in the concrete desert.",
 				improvementLevelsPerTechLevel: 1,
			},
		},
		
		getMaxLevel: function (improvementID, techLevel) {
			let def = this.campImprovements[improvementID];
			let improvementLevelsPerTechLevel = def.improvementLevelsPerTechLevel || 0;
			return improvementLevelsPerTechLevel * techLevel;
		}

	};
	return ImprovementConstants;
});
