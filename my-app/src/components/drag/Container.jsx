import React, { memo } from 'react';
import { SourceBox } from './SourceBox';
import { StatefulTargetBox as TargetBox } from './TargetBox';
import { Colors } from './Color';
import { Dustbin } from './Dustbin';
import { Box } from './Box';
export const Container = memo(function Container() {
    return (<div style={{ overflow: 'hidden', clear: 'both', margin: '-.5rem' }}>
			<div style={{ float: 'left' }}>
				<SourceBox color={Colors.BLUE}>
					<SourceBox color={Colors.YELLOW}>
						<SourceBox color={Colors.YELLOW}/>
						<SourceBox color={Colors.BLUE}/>
					</SourceBox>
					<SourceBox color={Colors.BLUE}>
						<SourceBox color={Colors.YELLOW}/>
					</SourceBox>
				</SourceBox>
			</div>
            <div style={{ float: 'left' }}>
				<SourceBox color={Colors.BLUE}>
                    <TargetBox>
					<SourceBox color={Colors.YELLOW}>
                        <TargetBox>
						<SourceBox color={Colors.YELLOW}/>
						<SourceBox color={Colors.BLUE}/>
                        </TargetBox>
					</SourceBox>
					<SourceBox color={Colors.BLUE}>
                    <TargetBox>
						<SourceBox color={Colors.YELLOW}/>
                        </TargetBox>
					</SourceBox>
                    </TargetBox>
				</SourceBox>
			</div>
            <div>
		<div style={{ overflow: 'hidden', clear: 'both', margin: '-1rem' }}>
			<Dustbin greedy={true}>
				<Dustbin greedy={true}>
					<Dustbin greedy={true}/>
				</Dustbin>
			</Dustbin>
			<Dustbin>
				<Dustbin>
					<Dustbin />
				</Dustbin>
			</Dustbin>
		</div>

		<div style={{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }}>
			<Box />
		</div>
	</div>
			<div style={{ float: 'left', marginLeft: '5rem', marginTop: '.5rem' }}>
				<TargetBox />
			</div>
		</div>);
});
