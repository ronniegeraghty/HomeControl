import React, { Component } from 'react';
import styles from './footer.module.css';

class Footer extends Component {
	render() {
		return (
			<footer className={styles.footer}>
				<div className="container-fluid">
					<div className="row justify-content-around">
						<div className="col-8 col-md-5">
							<h5 className={styles.title}>Home Control</h5>
							<p className={styles.description}>A tool to control and monitor your house.</p>
						</div>
						<div className="col-2">
							<ul className="list-unstyled">
								<li>
									<a
										className={styles.footerlink}
										href="https://github.com/ronniegeraghty/HomeControl"
									>
										Github
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
