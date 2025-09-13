# My Energy Footprint

A comprehensive web application for tracking and planning your home energy usage, costs, and carbon footprint.

## Features

### Core Functionality
- **Appliance Management**: Add household appliances from a comprehensive database of 300+ devices
- **Real-time Cost Calculation**: See monthly energy costs based on your electricity rate
- **Scenario Planning**: Use the "What If?" planner to compare different appliance setups
- **Savings Calculator**: Calculate potential savings with new appliances or usage patterns

### Advanced Features
- **Time-of-Use Rates**: Support for peak/off-peak electricity pricing
- **Carbon Footprint Tracking**: Monitor CO₂ emissions based on your energy usage
- **Data Persistence**: All data automatically saved to localStorage
- **Export/Import**: Share configurations and backup your data
- **Advanced Reporting**: Visual charts and energy efficiency recommendations

### User Experience
- **Professional UI**: Clean, dark-themed interface with cyan accents
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Error Handling**: Comprehensive validation and user-friendly error messages
- **Touch-Friendly**: Optimized for touch devices with proper target sizes

## How to Use

1. **Open `index.html`** in your web browser
2. **Configure settings** in the Settings panel:
   - Set your electricity rate (default is $0.15/kWh)
   - Enable time-of-use rates if applicable
   - Set carbon intensity for your region
3. **Add appliances** from the dropdown menu - each starts with 4 hours/day usage
4. **Adjust usage** by modifying the hours/day for each appliance
5. **Plan savings** by clicking "Plan My Savings" to compare different scenarios
6. **View reports** by clicking "Reports" to see charts and recommendations
7. **Export data** to backup or share your configuration

## Scenario Planning

The "What If?" feature allows you to:
- Copy your current setup to experiment with changes
- Add/remove appliances in the new plan
- See real-time savings calculations
- View monthly and yearly cost differences

## Files

- `index.html` - Main application interface
- `app.js` - Application logic and functionality
- `style.css` - Custom CSS styles and mobile optimizations
- `test.html` - Test suite for core functionality
- `package.json` - Project configuration and dependencies
- `vercel.json` - Vercel deployment configuration
- `deploy.sh` / `deploy.bat` - Deployment scripts
- `DEPLOYMENT.md` - Detailed deployment guide
- `README.md` - This documentation

## Technology

- **HTML5** with semantic structure and accessibility features
- **Tailwind CSS** for styling and responsive design
- **Chart.js** for data visualization
- **Vanilla JavaScript** for all functionality
- **localStorage** for data persistence
- **No build process required** - runs directly in the browser

## Advanced Features

### Time-of-Use Rates
- Configure different rates for peak and off-peak hours
- Automatic calculation based on usage patterns
- Visual indicators for cost optimization

### Carbon Footprint
- Track CO₂ emissions based on energy usage
- Configurable carbon intensity by region
- Environmental impact reporting

### Data Management
- Automatic saving to localStorage
- Export/import functionality for sharing
- Data validation and error handling

### Reporting & Analytics
- Usage breakdown by appliance category
- Cost analysis charts
- Energy efficiency recommendations
- Mobile-optimized visualizations

## Browser Support

Works in all modern browsers that support ES6+ JavaScript features, including:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Testing

Run the test suite by opening `test.html` in your browser. The tests cover:
- Input validation functions
- Cost calculation algorithms
- Appliance data validation
- Error handling

## Accessibility

The application includes:
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Reduced motion preferences

## Deployment

### Quick Deploy to Vercel

1. **Fork or clone this repository**
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Deploy!

3. **Or use the deployment script**:
   ```bash
   # Linux/Mac
   chmod +x deploy.sh
   ./deploy.sh
   
   # Windows
   deploy.bat
   ```

### Manual Deployment

See `DEPLOYMENT.md` for detailed step-by-step instructions.

### Live Demo

Once deployed, your app will be available at:
- `https://your-app-name.vercel.app` (Vercel)
- `https://your-username.github.io/energy-footprint` (GitHub Pages)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.