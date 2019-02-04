exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('stories')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('stories').insert([
				{
					id: 1,
					author: 'Anonomous',
					title: 'Bitcoin',
					snippet:
						'I was able to survive, and rebild my life again, because I left with nothing but Bitcoin',
					approved: true,
					approved_by_user_id: 1,
					body:
						'A friends of mine, one fo the first tech CEOs in Afghanistan, in 2014, was needing to pay her employees, young women. But their uncles, brothers and husbands would not let them open bank accounts. The men want to control everything there and paypall was banned and all that. So, she paid them in Bitcoin. They would keep their bitcoins in a hot wallet on their phones and come home and their husbands would not have any idea where the money was, etc. One of these young women had to flee Afghanistan. She was a victim of political violence and had to leave. She went on foot as a refugee through Iran, Turkey, and eventually settled in Germany. During this time, her Bitcoin, which she took with her, had accumulated in value quite a bit and she was entirely able to rebuild her life in Germany.',
					country: 'Afghanistan'
				},
				{
					id: 2,
					author: 'Alex Altman, for Time.com',
					title: 'Was goign to die',
					snippet: 'Faez al Sharaa was sure he was going to die.',
					approved: true,
					approved_by_user_id: 1,
					body:
						'He was walking to work in his hometown of Daraa, the southern Syrian city where the protests against President Bashar al-Assad first erupted. For young civilians like Faez, now 28, leaving the house in the spring of 2013 had become a game of Russian roulette. Dozens were dying each day in the civil war between Assad’s forces and antigovernment insurgents. The ancient farming town of Daraa had become a grisly battlefield. Dissidents had disappeared. Children had been plucked off the streets for suspected anti-government activities, only to be tortured by authorities. On that Tuesday morning in late March, Faez was confronted by a group of Syrian army soldiers. They were looking for a man who had been spotted with a handgun. Faez and three others were detained and accused of being terrorists. Standing at gunpoint, his hands in the air, he recalls feeling furious with himself for risking the solo walk to work. “We felt death upon us, and we accepted it,” he says now. “I can’t describe it in words.” He got lucky. At that moment, an old woman barreled into the street, begging the gun-toting soldiers to spare these men. They were her son, her nephew, her neighbors, the old lady pleaded. Faez had never seen the woman before. But the soldiers relented. The stranger saved his life. Faez al Sharaa, 28, shows a Syrian plate inscribed with the Shahada he took before fleeing to Jordan at his apartment in Richardson, Texas on Nov. 20, 2015. Michael Kirby Smith for TIMEFaez al Sharaa, 28, shows a Syrian plate inscribed with the Shahada he took before fleeing to Jordan at his apartment in Richardson, Texas on Nov. 20, 2015. By the time Faez returned home that night from his job at a healthcare company, he had resolved to flee Syria. He talked it over with his wife, informed his mother, and then reached out online to an underground group known for smuggling Syrians into Jordan. Again Faez was fortunate: the smugglers had space in a private car to carry him and his wife to the border the next day. The couple packed their bags with clothing, photos from their wedding and a few keepsakes: a set of colored bowls they had received as a gift, a glimmering golden plate inscribed with the Shahada, the Muslim profession of faith. The following morning, they walked out the door and left their life behind. A Global Crisis. Now Faez is one of the lucky ones, a refugee who has been granted a new future in the United States. He tells the story of his family’s two-year odyssey from his living-room couch in a Dallas suburb. His wife Shaza, also 28, fixes Arabic coffee in the kitchen. The couple’s 14-month old daughter Sham toddles across the room. Baby Sara, 4 months old and an American citizen, beams from her rocker. The al Sharaa family arrived in Dallas nine months ago. They have adjusted well to a bracing cultural transition. Faez and Shaza are picking up English. He has a steady job on the graveyard shift at a local Walmart, stocking shelves in the frozen section from 10 p.m. to 7 a.m. They have a second-hand sedan and a new apartment, where bowls of fruit and ornaments from home brighten the shag carpeting and popcorn ceiling. Neighbors have been welcoming. But there are notes of frustration in Faez’s voice as he recounts the family’s journey through an interpreter, Razan Ali, 22, who doubles as the family’s resettlement case worker at the International Rescue Committee. When we met on Nov. 19, the U.S. House of Representatives had just voted by a wide margin to tighten oversight of the program that resettles Syrian refugees in the U.S., forcing top government officials to certify that each new arrival poses no security threat. Some 30 governors have objected to admitting new refugees in their states, including Gov. Greg Abbott of Texas, a Republican. Donald Trump, the frontrunner for the GOP presidential nomination, has promised to deport refugees who have already arrived, while increasing surveillance of American mosques and keeping watch lists of certain immigrant groups. The backlash was driven by the discovery of a Syrian passport among the belongings of a member of the terrorist cell that attacked Paris on Nov. 13. It didn’t matter that the document was later revealed as a likely forgery. An ugly strain of nativism, stoked by the prospect of a terrorist infiltrating the U.S. by posing as an asylee, is coursing through national politics, from the campaign trail to the U.S. Capitol. With fear spreading and solutions in short supply, the refugees have become a target, even though they are trying to escape violence and move on with their lives. The refugees, Faez says, have become “scapegoats.” Polls conducted since the Paris attacks show the majority of Americans oppose admitting refugees. Refugee advocacy groups worry the fear will lead to violence. Two days after Faez spoke with TIME, armed protesters—some with masks and tactical weapons—gathered outside a green-domed mosque in nearby Irving, Tex., to challenge what one sign decried as the “Islamization of America.” Faez has been stunned by the response. “It shocked me, because America prides itself on diversity. It is a melting pot,” he says. “Some are misinformed, or not informed, by what is going on in Syria.” Half of Syria’s population of 22 million has been uprooted by the war between a tyrant and the terrorists of the Islamic State. Some 300,000 have been killed. More than 4 million Syrians have fled. Syrian families have drowned when flimsy rafts capsized in the Mediterranean. Others perished on the treacherous overland journey through the Balkans. In August, 71 Syrian refugees suffocated in the back of a chicken truck abandoned alongside a highway in Austria; the dead included children as young as 1. The burden of sheltering the refugees has fallen largely on Syria’s neighbors, like Turkey, Lebanon and Jordan. Wealthy nations in Northern and Western Europe have rolled out the welcome mat as well. Germany expects to take in some 800,000 Syrians in 2015, and France, in the wake of the bloodshed in Paris, announced it would admit another 30,000. By contrast, the U.S. has taken in only about 2,200 since the violence began in 2011. President Obama has called for the U.S. to welcome at least 10,000 Syrian refugees over the next year, though international aid groups and top Democrats like Hillary Clinton have called for the country to accept many more. The irony of the backlash is that refugees like the al Sharaas are more scrutinized than virtually anyone entering the U.S. “The process is thorough and extensive, and no one is actually resettled unless their identity, background, motives, and affiliations have been ascertained beyond doubt,” says international migration expert Maurizio Albahari, a professor at the University of Notre Dame. The initial vetting is conducted by the U.N.’s refugee agency, which usually refers the most vulnerable applicants to the U.S. At the top of the list are survivors of torture, victims of sexual violence, targets of political persecution, the medically needy, and single mothers with children. Nine U.S. government agencies, including the State Department, the Department of Defense and the FBI’s Terrorist Screening Center then conduct background checks of their own. It’s “the most rigorous screening and security vetting of any category of traveler to the United States,” says a senior administration official who requested anonymity to discuss the policy. Officials with the Department of Homeland Security travel abroad to conduct in-person interviews with every applicant. Fingerprints and iris scans are matched against criminal databases. Biographical information such as past visa applications are scrutinized to ensure the applicant’s story coheres. The process takes 18 to 24 months, and some 50% are rejected. “Short of swimming the Atlantic,” I.R.C. vice president Jennifer Sime told a congressional panel Nov. 19, “the refugee resettlement program is the most difficult way to come to the U.S.” The Exodus. Faez knows this firsthand, though his family’s journey was in some ways smoother than the average Syrian refugee experience. It began with a 90-minute hike to meet a smuggler’s car. As he and his wife scampered through neighborhoods pocked by war, a missile crashed into a nearby building. “We could’ve been killed,” Faez says. But they found their ride, which deposited them in a town on the porous border with Jordan. On the other side, a fleet of buses and trucks were waiting to shuttle fleeing families to relative safety. Two days later they arrived at the Zaatari refugee camp, a makeshift city of 80,000 plagued by rape and violence. As the crisis deepens, the sprawling labyrinth has become the fourth-largest city in Jordan. Many asylees spend years here, waiting as the U.N.’s refugee agency registers them and completes the laborious process of resettling them abroad. Michael Kirby Smith for TIMEA wall decoration from Syria in the al Sharaa familys’ apartment in Richardson, Texas on Nov. 20, 2015. Shaza’s relatives arranged to smuggle them out of the encampment and into the Jordanian capital of Amman, where they could stay with family. Faez found an off-the-books job with his old healthcare company, working the night shift to evade detection. The couple registered with the U.N. and began wending through a set of background checks. A first interview gave way to a second. At first Sweden seemed like an option. The prosperous nation—a desirable location due to the benefits it offers—has born a heavy burden in the refugee crisis since its 2013 pledge to provide permanent residency to almost any Syrian refugee. With more refugees per capita than any other European nation, it is now buckling under the strains, with public housing limited and a political backlash brewing. The al Sharaas were eventually informed Sweden was not accepting any more refugees. Following a third round of screening, the family was told they were now headed to Finland. Faez was excited about the plan after nearly two years in limbo. Life in Jordan was dismal. Locals were unfriendly. Without work authorization, his employer paid low wages, and he felt exploited. Promised aid didn’t arrive. “My life there was very difficult,” he says. “Our rights weren’t respected.” Then Finland fell through as well. A month later, the International Organization for Migration called to say the family were destined for the U.S. Faez wasn’t keen on the idea at first. “I didn’t want to come to America,” he says. It was so far from his old life, and he felt ill-equipped for the challenge, with few possessions, no money or language skills and a meager social safety net awaiting them. Among refugees, the U.S. is known for providing skimpier benefits than the nations of Europe. “In about two to three months, you’re expected to be on your feet, to fend for yourselves,” Faez says. “I didn’t feel ready for that.”The al Sharaas finally left for Texas in February. They were now a family of three, with an infant daughter born in Jordan and another on the way. “I was scared,” Faez recalls. It was his first time on an airplane. A Reunion in Jeopardy. They touched down in Dallas after nightfall on Feb. 18. The family was shy and timid at first, recalls Daley Ryan, the deputy director of the IRC’s office in Dallas. A caseworker brought them to an apartment the organization had rented for them. It was in a slightly run-down neighborhood, but as they gaped at the kitchen appliances they marveled aloud that this was all theirs. At times the transition has been tough. The graveyard shifts put Faez on a nocturnal schedule. Shaza, who wears a hijab, has been slower to pick up English as she spends days in the apartment tending to her young children. But until recently, they had been struck by the depth of opportunities afforded them in the U.S., and by the sense that the country’s creed of equality was reality, not just rhetoric.“I go about my daily activities without any discrimination,” Faez says. “When I apply for a job, I am treated fairly.” The family is paying off their $1,300 one-way plane tickets to the U.S. in monthly installments, and found a new apartment in a safer neighborhood, which is decorated with a Sony flatscreen and remnants of home, like the golden plate adorned with one of the pillars of Islam: “There is no God but God and Muhammad is the messenger of God.” The family found a local mosque and socializes with the small group of fellow refugees in the area. Faez came to believe that the U.S. offered the chance for personal growth and prosperity for his children. He worked hard to improve his English, and has laid out a series of long-term goals, including a higher education degree. “I would like to make sure to provide for my wife and children,” he says, “so they can live a happy life.” But in the aftermath of the Paris attacks, the political frenzy has upended their lives. In early December, six relatives from Syria are set to arrive in Dallas, placed there by the IRC to be close to the al Sharaa family. Abbott’s vow to block the resettlement of new Syrian refugees in Texas now threatens to shatter the reunion. Governors lack the authority to disrupt a federal program, but their opposition can make resettlement tricky. Last week a Syrian family destined for Indiana was rerouted to Connecticut because of Hoosier State Gov. Mike Pence’s objections to the refugee program. “I’m very worried about my family,” Faez says. Asked what he would wanted to share with leery Americans, Faez had a simple message. “I want them to know the Syrian people are not terrorists,” he says. “We are against ISIS. We don’t support them. They are a criminal organization. Syrian citizens are the ones paying the price.”',
					country: 'Syria'
				},
				{
					id: 3,
					author: 'Anonomous',
					title: 'Lorum Ipsum',
					snippet: '',
					approved: false,
					approved_by_user_id: 1,
					body:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque viverra eros, a ultrices odio. Sed nulla felis, tristique et arcu et, viverra pulvinar erat. Suspendisse potenti. Praesent et erat orci. Aliquam urna dui, placerat id porta ac, consectetur a massa. Donec blandit ut mauris eu laoreet. Praesent lobortis turpis tellus, eu sodales dui fermentum sodales. Etiam leo justo, posuere in orci id, laoreet vulputate felis. Phasellus ac condimentum ligula. Sed at finibus nulla. Proin placerat erat vel ipsum malesuada lobortis. Etiam fermentum eget turpis id cursus. Integer rutrum lorem vulputate urna sodales, sollicitudin porta metus rhoncus. Vestibulum a magna venenatis massa tristique scelerisque a eu ipsum. Phasellus eleifend dolor sit amet pretium molestie. Sed efficitur eu ante in dapibus. Etiam porta fringilla odio, sit amet pellentesque ligula. Morbi eget mi porttitor tellus aliquet lacinia sed sit amet libero. Quisque justo tellus, tincidunt nec dapibus facilisis, bibendum sit amet nisl. Etiam a suscipit ligula. Duis diam diam, porttitor id velit bibendum, maximus condimentum metus. Morbi placerat tempor velit volutpat pretium. Suspendisse potenti. Sed consectetur nunc iaculis mattis hendrerit. Sed arcu magna, tempor vel nibh bibendum, laoreet posuere eros. Phasellus in suscipit urna. Donec in elit quis quam efficitur tempor. Sed enim massa, elementum ornare tortor vitae, efficitur ultricies magna. Suspendisse tincidunt, mauris varius luctus tempor, velit ipsum pulvinar elit, a efficitur nisl tortor non nunc. Nullam vitae tristique urna. Nulla vitae fermentum justo. Nunc feugiat lacus at lorem pulvinar, a hendrerit nunc porta. Sed tincidunt laoreet sagittis. Suspendisse potenti. Mauris varius euismod tortor. Morbi lorem dolor, placerat quis tincidunt vel, congue vitae felis. Curabitur fermentum eros id efficitur facilisis. Fusce imperdiet enim porttitor aliquet fringilla. Duis facilisis lectus quis magna rutrum, ac consectetur eros dictum. Phasellus suscipit, lorem in dictum suscipit, odio nulla malesuada magna, a euismod nunc neque non felis. Nullam ullamcorper mi ac massa ultricies, et pharetra quam commodo. Aenean id quam suscipit, tempus orci sit amet, posuere dui. Proin magna ligula, pharetra nec scelerisque a, ultrices eu sapien. Praesent vehicula condimentum lorem ac volutpat. Vestibulum eget efficitur nunc. Aliquam finibus accumsan nunc, quis venenatis lorem semper vel. Vivamus enim purus, ultrices sit amet ante a, malesuada gravida libero. Pellentesque sed hendrerit diam, in lacinia dolor. Pellentesque sollicitudin nisl sed posuere suscipit. Pellentesque finibus vitae quam et pulvinar. Curabitur ac orci diam. Phasellus sodales tristique nunc sed varius. Nulla facilisi. Ut pulvinar sem non nibh ullamcorper iaculis.',
					country: 'Stanstanastan'
				}
			]);
		});
};
