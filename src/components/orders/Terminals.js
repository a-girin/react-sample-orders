import React from 'react';
import PropTypes from 'prop-types';
import TerminalRow from './TerminalRow';

const Terminals = ({ terminals, dragulaContainer }) => {
	return (
		<div className="terminals-section">
			<div className="section-heading">
				<div>In Progress Trips</div>
				<div>Next Trips</div>
			</div>
			<div className="terminals">
				{terminals.map((terminal) => (
					<TerminalRow
						terminal={terminal}
						key={terminal.id}
						dragulaContainer={dragulaContainer}
					/>
				))}
			</div>
		</div>
	);
};

Terminals.propTypes = {
	terminals: PropTypes.arrayOf(PropTypes.object).isRequired,
	dragulaContainer: PropTypes.object.isRequired,
};

export default Terminals;
